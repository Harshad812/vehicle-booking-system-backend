import { Router } from "express";
import authRouter from "./module/auth/auth.routes.js";
import vehicleRouter from "./module/vehicle/vehicle.routes.js";
import bookingRouter from "./module/booking/booking.routes.js";
import { protect } from "./common/middleware/auth.middleware.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/vehicle", protect, vehicleRouter);
router.use("/bookings", protect, bookingRouter);

export default router;
