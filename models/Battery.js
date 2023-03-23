const mongoose = require('mongoose')
const BatterySchema = mongoose.Schema(
    {
      Batteryname: {type: String,required: true,},
      Batterycapacity: {type: String,required: true}
    },
    {
      timestamps: true,
      collection: 'Battery', 
    }
  );

  const Battery  =  mongoose.model('Battery', BatterySchema);
  module.exports = Battery;