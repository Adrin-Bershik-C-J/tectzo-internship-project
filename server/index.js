const express = require("express");
const connectDB = require("./configs/dbConfig");
const cors = require("cors");
const otpRoute = require("./routes/otpRoutes.js");
const companyRoute = require("./routes/ownerRoutes.js");
const customerRoute = require("./routes/customerRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/company", companyRoute);
app.use("/api/otp", otpRoute);
app.use("/api/customer",customerRoute);

connectDB();

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});