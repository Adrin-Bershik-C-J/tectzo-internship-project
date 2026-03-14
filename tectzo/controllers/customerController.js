const Order = require("../models/orders");
const Company = require("../models/addCompany");
const OTP = require("../models/otpModel");
const asyncHandler = require("express-async-handler");

exports.postOrder = asyncHandler(async (req, res) => {
  const {
    source,
    destination,
    goodsType,
    quantity,
    vehicle,
    deliveryWithin,
    ownerPhone,
  } = req.body;

  const phone = req.user.phone; // Ensure you are getting the phone from req.user

  const user = await OTP.findOne({ phone });
  if (!user.role) {
    res.json({ message: "No roles found" });
  }

  if (user.role == "customer") {
    try {
      const company = await Company.findOne({ phone: ownerPhone });

      if (!company) {
        return res.status(404).json({ message: "Company not found!" });
      }

      const newOrder = new Order({
        source,
        destination,
        goodsType,
        quantity,
        vehicle,
        deliveryWithin,
        phone, // Add phone to the order document
        ownerPhone: company._id, // Link the order to the company
      });
      await newOrder.save();
      res.json({
        message: "Order posted successfully!",
        OrderDetails: newOrder,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Failed to post order." });
    }
  } else {
    res.json({ message: "User is not a customer to post an order!" });
  }
});

exports.getOrder = async (req, res) => {
  const phone = req.user.phone;
  try {
    const order = await Order.find({ phone });
    if (!order) {
      return res.status(404).json({ message: "No order available!" });
    }

    res.status(200).json({ order });
  } catch (e) {
    console.log(e);
  }
};
