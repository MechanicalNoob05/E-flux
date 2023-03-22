const mongoose = require('mongoose')
const HistorySchema = mongoose.Schema(
    {
      Customer: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Customer"}],
      Slot: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Slot"}],
      Timeslot: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Timeslot"}],
      Station: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Station"}]
    },
    {
      timestamps: true,
      collection: 'History', 
    }
  );
  const History  =  mongoose.model('History', HistorySchema);
  module.exports = History;