import express from "express";
import connectDb from "./db.js";
import userRouter from "./routes/user.js";

const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectDb();

// Routes
app.user("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
