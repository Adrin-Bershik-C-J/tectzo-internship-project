const mongoose = require("mongoose");

const addDriverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    availabilityStatus: {
      type: String,
      // enum: ['Available', 'On Duty', 'Unavailable'],
      // default: 'Available'
    },
    age: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    profilePhoto: {
      type: String,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    feedback: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AddDrivers", addDriverSchema);
