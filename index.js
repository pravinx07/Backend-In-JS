import express from "express";
import connectDb from "./connection.js";
import userRouter from "./routes/user.js";

const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectDb();

// Routes
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
