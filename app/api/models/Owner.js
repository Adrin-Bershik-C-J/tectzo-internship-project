const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  phone: {
    type: String,
    require: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  company: [
    {
      name: String,
      location: String,
      website: String,
      tagline: String,
      description: String,
      selectedCategories: [String],
      image: String,
    },
  ],
  service: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DailyService",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Owner = mongoose.model("Owner", ownerSchema);
module.exports = Owner;
