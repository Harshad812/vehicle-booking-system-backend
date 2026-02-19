import app from "./app.js";
import connectDB from "./config/database.js";

const startServer = async () => {
  try {
    await connectDB();
    app.listen("5001", () => {
      console.log("server running");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
