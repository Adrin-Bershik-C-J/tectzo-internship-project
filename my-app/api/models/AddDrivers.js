const mongoose = require("mongoose");

const addDriverSchema = new mongoose.Schema({
  name: String,
  phone: String,
  role: String,
  age: String,
});

module.exports = mongoose.model("AddDrivers", addDriverSchema);
