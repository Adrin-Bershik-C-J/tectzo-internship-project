const asyncHandler = require("express-async-handler");
const Company = require("../models/addCompany");
const OTP = require("../models/otpModel");
const Order = require("../models/orders");

exports.addCompany = asyncHandler(async (req, res) => {
  const {
    name,
    location,
    website,
    tagline,
    description,
    selectedCategories,
    logo,
  } = req.body;

  console.log("req.user:", req.user); // Log req.user to ensure it's being set correctly

  const phone = req.user.phone;

  if (!phone) {
    return res.status(400).json({ message: "Phone number not available" });
  }

  const user = await OTP.findOne({ phone });

  if (user.role == "owner") {
    try {
      const newCompany = new Company({
        name,
        phone,
        location,
        website,
        tagline,
        description,
        selectedCategories,
        logo,
      });

      await newCompany.save();

      res.status(201).json({
        message: "Company saved successfully",
        company: newCompany,
      });
    } catch (err) {
      if (err.name === "ValidationError") {
        res.status(400).json({ success: false, error: "Validation error" });
      } else {
        console.error("Server error:", err);
        res.status(500).json({ success: false, error: "Server error" });
      }
    }
  }
});

exports.getCompany = asyncHandler(async (req, res) => {
  const phone = req.user.phone;

  if (!phone) {
    return res.status(400).json({ message: "Phone number not available" });
  }

  try {
    const company = await Company.find({ phone });

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    res.status(200).json({ company });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

exports.getOrder = async (req, res) => {
  const ownerPhone = req.user.phone; // Assuming the company owner's phone is in req.user.phone

  try {
    const company = await Company.findOne({ phone: ownerPhone });

    if (!company) {
      return res.status(404).json({ message: "Company not found!" });
    }

    const orders = await Order.find({ ownerPhone: company._id });
    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders available!" });
    }
    res.status(200).json({ orders });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Failed to fetch orders." });
  }
};
