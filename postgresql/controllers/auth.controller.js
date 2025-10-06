import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { use } from "react";
const prisma = new PrismaClient();
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!email || !name || !password || !phone) {
      console.log("Data Is Missin");

      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    // hash the pass

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        verificationToken,
      },
    });

    // send mail - TODO
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Registraion failed",
    });
  }
};

export const loginUser = async (req, res) => {
  const { email: userEmail, password: userPassword } = req.body;

  if (!userEmail || !userPassword) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!existingUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      userPassword,
      existingUser.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: existingUser.id,
      },
      process.env.JWT_SECRETE,
      { expiresIn: "24h" }
    );

    const cookieOptions = {
      httpOnly: true,
    };

    res.cookie("token", token, cookieOptions);

    return res.status(201).json({
      success: true,
      token,
      user: {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
      },
      message: "User logged in successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while logging in",
    });
  }
};

