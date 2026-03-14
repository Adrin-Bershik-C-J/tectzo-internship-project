const express = require("express");
const { sendOTP, verifyOTP,getRole } = require("../controllers/otpController");
const rateLimiter = require("../middlewares/rateLimiter");
const validateToken=require("../middlewares/validateTokenHandler")

const router = express.Router();

router.post("/sendOTP", rateLimiter, sendOTP);
router.post("/verifyOTP", verifyOTP);
router.get("/getRole", validateToken, getRole);

module.exports = router;
