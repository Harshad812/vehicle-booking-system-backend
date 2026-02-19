import Vehicle from "../../model/vehicle.model.js";

class VehicleService {
  async create(vehicleData) {
    try {
      const newVehicle = Vehicle.create({ ...vehicleData });

      return newVehicle;
    } catch (error) {
      console.error(error.message);
      throw new Error("Vehicle creation failed");
    }
  }

  async getVehicle(params) {
    try {
      const vehicles = Vehicle.find({ ...params });

      return vehicles;
    } catch (error) {
      console.error(error.message);
      throw new Error("Vehicle retrieve failed");
    }
  }
}

export default VehicleService;
