const mongoose = require("mongoose");

const ticketsSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: false,
    },
    ownerPhone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AddCompany",
      required: false,
    },
    source: {
      type: String,
      required: false,
    },
    destination: {
      type: String,
      required: false,
    },
    goodsType: [
      {
        type: String,
        required: false,
      },
    ],
    quantity: {
      required: false,
      type: String,
    },
    // vehicle: [
    //   {
    //     ref: "VehicleDetails",
    //     required: false,
    //   },
    // ],
    deliveryWithin: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", ticketsSchema);
