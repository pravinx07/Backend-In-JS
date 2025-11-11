import express from "express";
import { apiLimiter } from "./middleware/rateLimiter.js";
import authRoute from "./routes/user.route.js"
import helmet from "helmet"
import morgan from "morgan";
import logger from "./config/logger.js";
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./docs/swagger.js";

const app = express();
app.set("trust proxy",1)
app.use(morgan("dev",{
    stream:{
        write:(message) => logger.info(message.trim())
    }
}))

app.use(express.json());
app.use(helmet({
    contentSecurityPolicy:false,
    crossOriginResourcePolicy:{policy:"cross-origin"}
}))

app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(apiLimiter);

app.get("/",(req,res)=>{
    logger.info("Home route access")
    res.send("Hello Backend")
})
app.use("/api/v1/auth/",authRoute)

app.listen(5000, () => logger.info("Server is running on 5000"));
