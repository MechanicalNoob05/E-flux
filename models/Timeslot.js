const mongoose = require('mongoose')
const TimeslotSchema = mongoose.Schema(
    {
      Duration: {type: String,required: true}
    },
    {
      timestamps: true,
      collection: 'Timeslot', 
    }
  );

  const Timeslot  =  mongoose.model('Timeslot', TimeslotSchema);
  module.exports = Timeslot;