const express = require("express");
const {
  addCompany,
  getCompany,
  getOrder,
} = require("../controllers/companyController");
const validateToken = require("../middlewares/validateTokenHandler");

const router = express.Router();

router.post("/addCompany", validateToken, addCompany);
router.get("/getCompany", validateToken, getCompany);
router.get("/getOrder", validateToken, getOrder);

module.exports = router;
