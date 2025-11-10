import express from "express";
import { apiLimiter } from "./middleware/rateLimiter.js";
import authRoute from "./routes/user.route.js"

const app = express();

app.use(express.json());
app.use(apiLimiter);

app.use("/api/v1/auth/",authRoute)

app.listen(5000, () => console.log("Server is running on 5000"));
