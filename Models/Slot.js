const mongoose = require('mongoose')
const SlotSchema = mongoose.Schema(
    {
      Slotname: {type: String,required: true,},
      Connectortype: {type: String,required: true}
    },
    {
      timestamps: true,
      collection: 'Slot', 
    }
  );

  const Slot  =  mongoose.model('Slot', SlotSchema);
  module.exports = Slot;