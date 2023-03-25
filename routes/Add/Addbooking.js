const express = require('express');
const router = express.Router();
const bookingModel = require('../../models/Booking');
const stationModel = require('../../models/Station');
var fetchuser = require('../../middleware/fetch')
router.post('/',fetchuser,async(req, res) => {
    ("Processing a add a station");
    try{
        const {Timeslot, Slot, Stationid} = req.body;
        const saved = await bookingModel.find({Timeslot:Timeslot,Slot:Slot,Station:Stationid});
        if (saved.length > 0) {
            return res.status(400).json({ errors:"You already have a Booking for this station at these timeslot"});
          }
        const Booking = new bookingModel({
            Timeslot: Timeslot,
            Slot: Slot,
            Station: Stationid,
            Customer:req.user.id,
            Date:req.body.Date
        });
        const savedBooking = await Booking.save();
        let filter = {_id: Stationid};
        const savedStations = await stationModel.find({_id: Stationid})
        let Bookingstation = savedStations[0].Bookings
        Bookingstation.push(savedBooking._id)
        let update = {Bookings: Bookingstation};
        let savedstation = await stationModel.findOneAndUpdate(filter, update ,{new : true});
        return res.status(201).json({savedBooking});
    }
    catch(error){
       return res.status(500).json({err:error.message});
    }
  })
module.exports=router;