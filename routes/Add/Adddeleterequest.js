const express = require('express');
const router = express.Router();
const bookingModel = require('../../models/Booking');
const deleterequestModel = require('../../models/Deleterequest');
var fetchuser = require('../../middleware/fetch')
router.post('/',fetchuser,async(req, res) => {
    ("Processing a add a station");
    try{
        const {Bookingid} = req.body;
        const saved = await bookingModel.find({_id:Bookingid});
        if (saved.length < 0) {
            return res.status(400).json({ errors:"You Don't have a Booking for this station at these timeslot"});
          }
        const Deleterequests = new deleterequestModel({
            Timeslot: saved[0].Timeslot,
            Slot: saved[0].Slot,
            Station: saved[0].Station,
            Customer:saved[0].Customer,
            Bookings:Bookingid
        });
        const savedBooking = await Deleterequests.save();
        let filter = {_id: Bookingid};
        let update = {Deletestatus: true};
        let savedstation = await bookingModel.findOneAndUpdate(filter, update ,{new : true});
        return res.status(201).json({savedBooking});
    }
    catch(error){
       return res.status(500).json({err:error.message});
    }
  })
module.exports=router;