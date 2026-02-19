import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    rentPerDay: {
      type: Number,
      required: true,
    },
    availability: {
      type: Boolean,
      required: true,
    },
    popularity: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

vehicleSchema.index({ name: 1, type: 1 });

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;
