const mongoose = require('mongoose')
const DeleterequestSchema = mongoose.Schema(
    {
      Customer: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Customer"}],
      Slot: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Slot"}],
      Timeslot: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Timeslot"}],
      Station: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Station"}],
      Bookings: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Bookings"}]
    },
    {
      timestamps: true,
      collection: 'Deleterequest', 
    }
  );

  const Deleterequest  =  mongoose.model('Deleterequest', DeleterequestSchema);
  module.exports = Deleterequest;