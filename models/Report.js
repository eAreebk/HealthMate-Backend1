import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Blood Test', 'X-Ray', 'MRI', 'CT Scan', 'Ultrasound', 'ECG', 'Other']
  },
  date: {
    type: Date,
    required: true
  },
  notes: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['uploaded', 'analyzed'],
    default: 'uploaded'
  }
}, {
  timestamps: true
});

export default mongoose.model('Report', reportSchema);