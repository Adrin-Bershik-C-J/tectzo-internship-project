const mongoose = require("mongoose");

// Define the OTP schema
const otpSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true, // Ensure phone numbers are unique
  },
  otp: {
    type: String,
    required: false,
  },
  expiresAt: {
    type: Date,
    required: true // Ensure expiry time is required
  },
  role: {
    required: false,
    type: String,
  },
  newUser: {
    type: Boolean,
    default: true,
  },
});

// Create the OTP model
module.exports = mongoose.model("OTP", otpSchema);
