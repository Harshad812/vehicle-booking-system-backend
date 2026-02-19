import app from "./app.js"
import connectDB from "./config/database.js"

const startServer = async () => {
  try {
    await connectDB()
    app.listen("5001", () => {
      console.log("server running")
    })
  } catch (error) {
    process.nextTick(1)
  }
}

startServer();