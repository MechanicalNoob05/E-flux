const mongoose = require('mongoose')
const StationSchema = mongoose.Schema(
    {
      Stationname: {type: String,required: true,},
      Stationaddress: {type: String,required: true},
      Password: {type: String,required: true,},
      Phone: {type: String, require: false,},
      Country: {type: String, require: false,},
      State: {type: String, require: false,},
      City: {type: String, require: false,},
      Zipcode: {type: String, require: false,},
      Description: {type: String, require: false,},
      Priceperunit: {type: String, require: false,},
      Latitude: {type: String, require: false,},
      Longitude: {type: String, require: false,unique: true},
      Slot: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Slot"}],
      Timeslot: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Timeslot"}],
      Bookings: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Bookings"}],
      Batterybookings: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Batterybookings"}],
      Battery: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Battery"}],
      pic: { type: String,required: false,default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",},
      Link: { type: String,required: false,default:"https://goo.gl/maps/xu31d6mKRews7gP4A",}
    },
    {
      timestamps: true,
      collection: 'Station', 
    }
  );

  const Station  =  mongoose.model('Station', StationSchema);
  module.exports = Station;