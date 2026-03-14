const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

app.use(cors());
app.use(express.json());

const port = 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/Tranzpo")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const Tickets = require("./models/Tickets");
const addDrivers = require("./models/AddDrivers");
const addCompany = require("./models/AddCompany");
const VehicleDetails = require("./models/VehicleDetails");

// API request function to fetch vehicle details and store in MongoDB
const fetchAndStoreVehicleDetails = async (registrationNumber) => {
  const options = {
    method: "POST",
    url: "https://rto-vehicle-information-verification-india.p.rapidapi.com/api/v1/rc/vehicleinfo",
    headers: {
      "x-rapidapi-key": "29e858ec9bmsh791fd9ee8b64553p180a44jsnc54d9aae64ed",
      "x-rapidapi-host":
        "rto-vehicle-information-verification-india.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      reg_no: registrationNumber,
      consent: "Y",
      consent_text:
        "I hereby declare my consent agreement for fetching my information via AITAN Labs API",
    },
  };

  try {
    const response = await axios.request(options);
    const vehicleData = response.data.result;

    // Save to MongoDB using the VehicleDetails model
    const vehicle = new VehicleDetails({
      reg_no: vehicleData.reg_no,
      state_code: vehicleData.state_code,
      state: vehicleData.state,
      office_code: vehicleData.office_code,
      office_name: vehicleData.office_name,
      reg_date: new Date(vehicleData.reg_date),
      purchase_date: new Date(vehicleData.purchase_date),
      owner_name: vehicleData.owner_name,
      vehicle_manufacturer_name: vehicleData.vehicle_manufacturer_name,
      // Add more fields as needed
    });

    await vehicle.save();
    console.log("Vehicle details saved to MongoDB");
  } catch (error) {
    console.error("Error fetching or saving vehicle details:", error);
  }
};

// Endpoint to trigger fetching and storing vehicle details
app.post("/fetchAndStoreVehicleDetails", async (req, res) => {
  const { registrationNumber } = req.body;

  try {
    await fetchAndStoreVehicleDetails(registrationNumber);
    res.status(200).send("Vehicle details fetched and stored successfully");
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to fetch and store vehicle details",
        error: error.message,
      });
  }
});

app.post("/", async (req, res) => {
  let user = new Tickets(req.body);
  let result = await user.save();
  res.send(result);
});

app.get("/getTickets", (req, res) => {
  Tickets.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/addDrivers", async (req, res) => {
  try {
    const driver = new addDrivers(req.body);
    const result = await driver.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/getDrivers", async (req, res) => {
  try {
    const drivers = await addDrivers.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching drivers",
      error: error.message,
    });
  }
});

app.post("/companyDetails", async (req, res) => {
  try {
    const company = new addCompany(req.body);
    const result = await company.save();
    res.status(201).send(result);
  } catch (error) {
    console.error("Error saving company details:", error);
    res.status(500).send(error);
  }
});

app.get("/displayVehicles", async (req, res) => {
  try {
    const vandi = await VehicleDetails.find();
    res.json(vandi);
  } catch (error) {
    res.send(error);
  }
});

app.get("/getCompanyDetails", async (req, res) => {
  try {
    const company = await addCompany.find();
    res.json(company);
  } catch (error) {
    res.catch(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
