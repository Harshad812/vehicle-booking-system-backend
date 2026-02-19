import { Router } from "express";
import VehicleController from "./vehicle..controller.js";

const vehicleRouter = Router();

const vehicleController = new VehicleController();

vehicleRouter.post("/", vehicleController.create);
vehicleRouter.get("/", vehicleController.getVehicle);

export default vehicleRouter;
