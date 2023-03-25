const mongoose = require('mongoose')
const DeletebatteryrequestSchema = mongoose.Schema(
    {
      Customer: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Customer"}],
      Battery: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Battery"}],
      Station: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Station"}],
      Batterybookings: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Batterybookings"}]
    },
    {
      timestamps: true,
      collection: 'Deletebatteryrequest', 
    }
  );

  const Deletebatteryrequest  =  mongoose.model('Deletebatteryrequest', DeletebatteryrequestSchema);
  module.exports = Deletebatteryrequest;