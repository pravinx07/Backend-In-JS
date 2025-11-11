import express from "express";
import { apiLimiter } from "./middleware/rateLimiter.js";
import authRoute from "./routes/user.route.js"
import helmet from "helmet"

const app = express();
app.set("trust proxy",1)

app.use(express.json());
app.use(helmet({
    contentSecurityPolicy:false,
    crossOriginResourcePolicy:{policy:"cross-origin"}
}))

app.use(apiLimiter);

app.use("/api/v1/auth/",authRoute)

app.listen(5000, () => console.log("Server is running on 5000"));
