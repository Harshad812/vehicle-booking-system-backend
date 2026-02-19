import BookingService from "./booking.service.js";

class BookingController {
  constructor() {
    this.bookingService = new BookingService();
  }

  create = async (req, res, next) => {
    try {
      const newBooking = await this.bookingService.create(req.body);

      return res.status(201).json({
        success: true,
        data: newBooking,
        message: "Booking confirmed successfully",
      });
    } catch (error) {
      next(error);
    }
  };

  cancel = async (req, res, next) => {
    try {
      const { id } = req.params;
      const booking = await this.bookingService.cancel(id);

      return res.status(200).json({
        success: true,
        data: booking,
        message: "Booking cancelled successfully",
      });
    } catch (error) {
      next(error);
    }
  };

  getMyBookings = async (req, res, next) => {
    try {
      const { userId } = req.query;
      const bookings = await this.bookingService.getMyBookings(userId);

      return res.status(200).json({
        success: true,
        data: bookings,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default BookingController;
