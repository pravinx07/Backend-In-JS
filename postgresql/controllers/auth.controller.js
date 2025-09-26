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
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email or password",
      });
    }

    
    jwt.sign(
      {
        id: user.id,
      },

      
      process.env.JWT_SECRETE,
      { expiresIn: "24h" }
    );

    const cookieOptions = {
        httpOnly:true
      }
    res.cookie("token", token, cookieOptions)

    return res.status(201).json({
        success:true,
        token,
        user:{
            id:user.id,
            name:user.name,
            email:user.email
        },
        message:"User Login Successfully"
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Login failed",
    });
  }
};
