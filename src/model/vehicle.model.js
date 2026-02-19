import mongoose from "mongoose";

// 1. Define the Schema
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
  },
  { timestamps: true },
);

vehicleSchema.index({ name: 1, type: 1 });

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;
