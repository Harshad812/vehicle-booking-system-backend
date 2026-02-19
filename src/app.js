import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan());

app.use("/api/v1", router);

app.get("/health", (req, res) => {
  return res.status(201).json({
    success: true,
    message: "API running...",
  });
});

export default app;
