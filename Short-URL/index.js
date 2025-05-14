import express from "express";
import urlRoute from "./routes/url.js";
import { connectDB } from "./connection.js";
import path from "path";
import Url from "./models/url.js";
import userRouter from "./routes/user.js";
const app = express();
const PORT = 8001;
connectDB();

app.use(express.json());
app.use("/url", urlRoute);
app.use("/user", userRouter);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await Url.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  return res.redirect(entry.redirectUrl); // assuming you stored the original URL as redirectUrl
});

app.get("/test", async (req, res) => {
  const allUrls = await Url.find({});

  return res.render("home",{ urls: allUrls });
});
app.listen(PORT, () => {
  console.log(`Server is Running on PORT: ${PORT}`);
});
