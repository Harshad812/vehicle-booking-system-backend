import { Router } from "express";
import authRouter from "./module/auth/auth.routes.js";
import vehicleRouter from "./module/vehicle/vehicle.routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/vehicle", vehicleRouter);

export default router;
