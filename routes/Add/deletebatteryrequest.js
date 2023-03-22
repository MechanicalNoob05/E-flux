const express = require('express');
const router = express.Router();
const batterybookingModel = require('../../models/Batterybookings');
const deletebatteryrequestModel = require('../../models/Deletebatteryrequest');
var fetchuser = require('../../middleware/fetch')
router.post('/',fetchuser,async(req, res) => {
    ("Processing a add a station");
    try{
        const {Batterybookingid} = req.body;
        const saved = await batterybookingModel.find({_id:Batterybookingid});
        if (saved.length < 0) {
            return res.status(400).json({ errors:"You Don't have a Booking for this station"});
          }
        const Deleterequests = new deletebatteryrequestModel({
            Battery: saved[0].Battery,
            Station: saved[0].Station,
            Customer:saved[0].Customer,
            Batterybookings:Batterybookingid
        });
        const savedBooking = await Deleterequests.save();
        let filter = {_id: Batterybookingid};
        let update = {Deletestatus: true};
        let savedstation = await batterybookingModel.findOneAndUpdate(filter, update ,{new : true});
        return res.status(201).json({savedBooking});
    }
    catch(error){
       return res.status(500).json({err:error.message});
    }
  })
module.exports=router;