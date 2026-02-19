import VehicleService from "./vehicle.service.js";

class VehicleController {
  constructor() {
    this.VehicleService = new VehicleService();
  }

  create = async (req, res, next) => {
    try {
      const newVehicle = await this.VehicleService.create(req.body);

      return res.status(201).json({
        success: true,
        data: newVehicle,
      });
    } catch (error) {
      next(error);
    }
  };

  getVehicle = async (req, res, next) => {
    const query = req.query;

    try {
      const result = await this.VehicleService.getVehicle(query);

      return res.status(200).json({
        success: true,
        ...result,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default VehicleController;
