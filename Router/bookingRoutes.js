const express = require("express");
const router = express.Router();
const bookingController = require("../Controller/bookingController");
const authMiddleware = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/allowRoles");

// ...existing code...
router.get("/", authMiddleware, bookingController.getBookings);
router.post("/", authMiddleware, bookingController.createBooking);

// Bỏ authMiddleware ở route này để ai cũng lấy được lịch đặt sân
router.get("/schedule", bookingController.getScheduleByField);

// Lịch đặt sân riêng cho chủ sân (manager xem tất cả lịch của sân mình quản lý)
router.get("/owner", authMiddleware, allowRoles("manager"), bookingController.getScheduleByOwner);

module.exports = router;

module.exports = router;
