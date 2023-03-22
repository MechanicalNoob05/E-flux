const mongoose = require('mongoose')
const customerSchema = mongoose.Schema(
    {
      Firstname: {type: String,required: true,},
      Lastname: {type: String,required: true,},
      Phonenumber: {type: String,required: true,unique: true},
      Password: {type: String,required: true,},
      Carname: {type: String, require: false,},
      Carmodel: {type: String, require: false,},
      Carnumber: {type: String, require: false,},
      Cartype: {type: String, require: false,},
      isChargingstationOwner: {type: Boolean, required: false, default: false,},
      isBatteryreplacer: {type: Boolean, required: false, default: false,},
      isCustomer: {type: Boolean, required: false, default: true,},
      Pic: { type: String,required: false,default:"https://cdn-icons-png.flaticon.com/512/149/149071.png",},
    },
    {
      timestamps: true,
      collection: 'Customer', 
    }
  );
const Customer  =  mongoose.model('Customer', customerSchema);
module.exports = Customer;