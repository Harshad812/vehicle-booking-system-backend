import { Router } from "express";
import BookingController from "./booking.controller.js";

const bookingRouter = Router();
const bookingController = new BookingController();

bookingRouter.post("/", bookingController.create);
bookingRouter.patch("/:id/cancel", bookingController.cancel);
bookingRouter.get("/my-bookings", bookingController.getMyBookings);

export default bookingRouter;
