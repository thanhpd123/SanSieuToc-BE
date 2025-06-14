require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Routers
const typeRouter = require('./router/typeRouter');
const fieldsRouter = require('./router/fieldsRoutes');
const authRouter = require('./router/authRoutes');
const bookingRouter = require('./router/bookingRoutes');
const coachesRouter = require('./router/coachesRouter');
const coachBooking = require('./router/coachBookingRoutes');
const fieldUnit = require('./router/fieldUnitRouters')
const uploadRouter = require('./router/uploadRoutes');
const reportRouter = require('./router/reportsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// ===== Middleware =====
// CORS: Cho phép frontend truy cập (thay đổi origin nếu cần thiết)
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://san-sieu-toc.vercel.app'],
  credentials: true,
}));

// Middleware để phân tích request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (ví dụ: ảnh)
app.use('/images', express.static('public/images'));

// ===== MongoDB Connection =====
const DB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Sansieutoc' || 'mongodb+srv://thanhpd2303:ViuqJ4ZOiPH6sbeT@sansieutoc.wnrijxt.mongodb.net/?retryWrites=true&w=majority&appName=SanSieuToc';

mongoose.connect(DB_URI)
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Dừng server nếu không kết nối được DB
  });

// ===== Routes =====
app.use('/type', typeRouter);
app.use('/field', fieldsRouter);
app.use('/auth', authRouter);
app.use('/booking', bookingRouter);
app.use('/coach', coachesRouter);
app.use('/coachbooking', coachBooking);
app.use('/fieldunit', fieldUnit)
app.use('/upload', uploadRouter);
app.use('/report', reportRouter);
// ===== Global Error Handling Middleware =====
app.use((err, req, res, next) => {
  console.error('🔥 Server error:', err.stack);
  res.status(500).json({ message: 'Server error xảy ra, vui lòng thử lại sau.' });
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`🚀 Server is running at ${PORT}`);
});
