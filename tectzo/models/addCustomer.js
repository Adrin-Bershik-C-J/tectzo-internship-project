const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    phone: {
      required: true,
      type: String,
    },
    image: {
      profile: String,
    },
    orders: [
      {
        ref: "Orders",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customers", customerSchema);
