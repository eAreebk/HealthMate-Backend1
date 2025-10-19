import mongoose from 'mongoose';

const vitalsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  bloodPressure: {
    type: String,
    required: true
  },
  heartRate: {
    type: Number,
    required: true
  },
  temperature: Number,
  weight: Number
}, {
  timestamps: true
});

export default mongoose.model('Vitals', vitalsSchema);