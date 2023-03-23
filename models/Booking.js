const mongoose = require('mongoose')
const BookingSchema = mongoose.Schema(
    {
      Customer: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Customer"}],
      Slot: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Slot"}],
      Timeslot: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Timeslot"}],
      Station: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Station"}],
      Deletestatus: {type: Boolean, required: false, default: false,},
    },
    {
      timestamps: true,
      collection: 'Bookings', 
    }
  );

  const Bookings  =  mongoose.model('Bookings', BookingSchema);
  module.exports = Bookings;