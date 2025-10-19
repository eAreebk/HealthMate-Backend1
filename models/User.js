import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please Add Name'],
      minlength: 3,
      maxlength: 30,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please Add Email'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Please Add Password'],
      minlength: 6,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please Add Phone'],
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);