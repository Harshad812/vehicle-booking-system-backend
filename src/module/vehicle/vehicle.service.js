import Vehicle from "../../model/vehicle.model.js";

class VehicleService {
  async create(vehicleData) {
    try {
      const newVehicle = await Vehicle.create({ ...vehicleData });

      return newVehicle;
    } catch (error) {
      console.error(error.message);
      throw new Error("Vehicle creation failed");
    }
  }

  async getVehicle(query) {
    try {
      const {
        search,
        type,
        minPrice,
        maxPrice,
        availability,
        sortBy = "createdAt",
        sortOrder = "desc",
        page = 1,
        limit = 10,
      } = query;

      const filter = {};

      if (search) {
        filter.name = { $regex: search, $options: "i" };
      }

      if (type) {
        filter.type = type;
      }

      if (minPrice || maxPrice) {
        filter.rentPerDay = {};
        if (minPrice) filter.rentPerDay.$gte = Number(minPrice);
        if (maxPrice) filter.rentPerDay.$lte = Number(maxPrice);
      }

      if (availability !== undefined) {
        filter.availability = availability === "true";
      }
      const pageNumber = Number(page);
      const limitNumber = Number(limit);
      const skip = (pageNumber - 1) * limitNumber;

      const sort = { [sortBy]: sortOrder === "desc" ? -1 : 1 };

      const vehicles = await Vehicle.find(filter)
        .sort(sort)
        .skip(skip)
        .limit(limitNumber);

      const total = await Vehicle.countDocuments(filter);

      return {
        data: vehicles,
        meta: {
          total,
          page: pageNumber,
          limit: limitNumber,
          totalPages: Math.ceil(total / limitNumber),
        },
      };
    } catch (error) {
      console.error(error.message);
      throw new Error("Vehicle retrieve failed");
    }
  }
}

export default VehicleService;
