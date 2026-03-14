const mongoose = require("mongoose");

const addCompanySchema = new mongoose.Schema({
  name: String,
  location: String,
  website: String,
  tagline: String,
  description: String,
  selectedCategories: [String],
  image: String,
});

module.exports = mongoose.model("AddCompany", addCompanySchema);
