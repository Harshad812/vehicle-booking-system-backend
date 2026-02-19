import Booking from "../../model/booking.model.js";

class BookingService {
  async create(bookingData) {
    try {
      const { vehicleId, startDate, endDate } = bookingData;
      const start = new Date(startDate);
      const end = new Date(endDate);

      const conflictingBooking = await Booking.findOne({
        vehicleId,
        status: "confirmed",
        $or: [{ startDate: { $lte: end }, endDate: { $gte: start } }],
      });

      if (conflictingBooking) {
        throw new Error("Vehicle is unavailable for the selected dates.");
      }

      const newBooking = await Booking.create({
        ...bookingData,
        startDate: start,
        endDate: end,
      });

      return newBooking;
    } catch (error) {
      throw error;
    }
  }

  async cancel(bookingId) {
    try {
      const booking = await Booking.findByIdAndUpdate(
        bookingId,
        { status: "cancelled" },
        { new: true },
      );

      if (!booking) {
        throw new Error("Booking not found");
      }

      return booking;
    } catch (error) {
      throw error;
    }
  }

  async getMyBookings(userId) {
    try {
      const bookings = await Booking.find({ userId })
        .populate("vehicleId")
        .sort({ createdAt: -1 });
      return bookings;
    } catch (error) {
      throw error;
    }
  }
}

export default BookingService;
