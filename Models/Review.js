const mongoose = require('mongoose')
const ReviewSchema = mongoose.Schema(
    {
      Star: {type: String,required: true,},
      Detail: {type: String,required: true},
      Stationid: {type: mongoose.Schema.Types.ObjectId, required: false, ref: "Station"},
      Customerid: {type: mongoose.Schema.Types.ObjectId, required: false, ref: "Customer"},
      pic: { type: String,required: false,default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",},
    },
    {
      timestamps: true,
      collection: 'Reviews', 
    }
  );

  const Reviews  =  mongoose.model('Reviews', ReviewSchema);
  module.exports = Reviews;