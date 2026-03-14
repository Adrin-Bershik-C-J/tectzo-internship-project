const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Owner",
    require: true,
  },
  details: [
    {
      source: {
        type: String,
        require: true,
      },
      destination: {
        type: String,
        require: true,
      },
      timing: {
        type: String,
        require: true,
      },
    },
  ],
  drivers:{
    ref:"AddDrivers",
    require:true
  },
  vehicles:{
    ref:"VehicleDetails",
    require:true
  }
});

const Service=mongoose.model("Service",serviceSchema);
module.exports=Service
