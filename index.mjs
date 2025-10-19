// Installing Libraries
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Importing Routers
import authRoutes from './routes/auth.js';
import reportRoutes from './routes/reports.js';
import vitalsRoutes from './routes/vitals.js';

// Importing Function
import { connectDB } from './Utils/connectDB.js';

dotenv.config();

const app = express();
import { PORT } from './Utils/config.js'

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello Welcome to the HealthMate app!');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/vitals', vitalsRoutes);

// Error handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Start server and connect DB
app.listen(PORT, () => {
  connectDB(); // Connect to MongoDB
  console.log(`Server running on port ${PORT}`);
});

// Export app (for Vercel deployment)
export default app;
