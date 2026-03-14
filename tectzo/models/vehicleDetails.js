const mongoose = require("mongoose");

const vehicleDetailsSchema = new mongoose.Schema({
  reg_no: String,
  state_code: String,
  state: String,
  office_code: Number,
  office_name: String,
  reg_date: Date,
  purchase_date: Date,
  owner_name: String,
  vehicle_manufacturer_name: String,
  // Add other fields as needed to match the API response
});

const VehicleDetails = mongoose.model("VehicleDetails", vehicleDetailsSchema);

module.exports = VehicleDetails;
