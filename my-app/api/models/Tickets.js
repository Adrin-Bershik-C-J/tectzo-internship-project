const mongoose = require("mongoose");

const ticketsSchema = new mongoose.Schema({
  name: String,
  phone: String,
  source: String,
  destination: String,
  goods: String,
  vehicle: String,
  count: String,
  date: String,
});

module.exports = mongoose.model("Tickets", ticketsSchema);