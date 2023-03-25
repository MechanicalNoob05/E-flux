const express = require('express');
const router = express.Router();
const batterybookingModel = require('../../models/Batterybookings');
const stationModel = require('../../models/Station');
var fetchuser = require('../../middleware/fetch')
router.post('/',fetchuser,async(req, res) => {
    ("Processing a add a station");
    try{
        const {Battery, Stationid} = req.body;
        const savedStations = await stationModel.find({_id: Stationid})
        if (savedStations.length < 0) {
          return res.status(400).json({ errors:"these station does not exist"});
        }
        const saved = await batterybookingModel.find({Battery:Battery,Station:Stationid});
        if (saved.length > 0) {
            return res.status(400).json({ errors:"You already have a Booking for this station at these timeslot"});
          }
        const Booking = new batterybookingModel({
            Battery: Battery,
            Station: Stationid,
            Customer:req.user.id,
            Date:req.body.Date
        });
        const savedBooking = await Booking.save();
        let filter = {_id: Stationid};
        let Batterybookings = savedStations[0].Batterybookings
        Batterybookings.push(savedBooking._id)
        let update = {Batterybookings: Batterybookings};
        let savedstation = await stationModel.findOneAndUpdate(filter, update ,{new : true});
        return res.status(201).json({savedBooking});
    }
    catch(error){
       return res.status(500).json({err:error.message});
    }
  })
module.exports=router;