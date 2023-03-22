const express = require('express');
const router = express.Router();
var fetchuser = require('../../middleware/fetch')
const batterymodel = require('../../models/Batterybookings');
const bookingmodel = require('../../models/Booking');
router.post('/', fetchuser, async (req, res) => {
  ("Processing a add a station");
  try {
    const savedbatterybooking = await batterymodel.find({Customer:req.user.id}).populate("Battery").populate("Station")
    const savedstationbooking = await bookingmodel.find({Customer:req.user.id}).populate("Slot").populate("Station").populate("Timeslot")
    const data={
        savedbatterybooking:savedbatterybooking,
        savedstationbooking:savedstationbooking
    }
    return res.status(200).json({ data });
  }
  catch (error) {
    return res.status(500).json({ err: error.message });
  }
})
module.exports = router;