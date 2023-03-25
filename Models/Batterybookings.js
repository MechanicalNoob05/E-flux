const mongoose = require('mongoose')
const BatterybookingSchema = mongoose.Schema(
    {
      Customer: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Customer"}],
      Battery: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Battery"}],
      Station: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Station"}],
      Deletestatus: {type: Boolean, required: false, default: false,},
      Date: {type: String,required: true,},
    },
    {
      timestamps: true,
      collection: 'Batterybookings', 
    }
  );

  const Batterybookings  =  mongoose.model('Batterybookings', BatterybookingSchema);
  module.exports = Batterybookings;