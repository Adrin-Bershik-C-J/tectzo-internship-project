const express = require("express");
const router = express.Router();
const { postOrder, getOrder } = require("../controllers/customerController");
const validateToken = require("../middlewares/validateTokenHandler");

router.post("/postOrder", validateToken, postOrder);
router.get("/getOrder", validateToken, getOrder);

module.exports = router;
