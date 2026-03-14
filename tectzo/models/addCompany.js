const mongoose = require("mongoose");

const addCompanySchema = new mongoose.Schema(
  {
    name: { type: String, require: false },
    phone: String,
    location: [String], //location should be static, means not tracked by phone of owner
    website: String,
    tagline: String,
    description: String,
    selectedCategories: { type: [String], require: false },
    logo: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("AddCompany", addCompanySchema);
