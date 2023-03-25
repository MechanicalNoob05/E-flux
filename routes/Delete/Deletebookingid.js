const express = require('express');
const router = express.Router();
const bookingModel = require('../../models/Booking');
const stationModel = require('../../models/Station');
router.delete('/',  async (req, res) => {
    console.log("Processing a request to Delete a User");
    try {
        const { deletebookingid } = req.body;
        const deletedbooking = await bookingModel.findByIdAndDelete(deletebookingid);
        if (!deletedbooking) {
            return res.status(401).json({ msg: "No request was found!", });
        }
        else {
            let filter = { _id: deletebookingid.Station };
            const savedStations = await stationModel.find({ _id: deletebookingid.Station })
            let Bookings = savedStations[0].Bookings
            const index = Bookings.indexOf(deletedbooking.Bookings[0]);
            let data = Bookings.splice(index, 1);
            let update = { Bookings: Bookings };
            let savedstation = await stationModel.findOneAndUpdate(filter, update, { new: true });
            return res.status(200).json({ msg: "Successfully Deleted User 💀", deletedbooking });
        }
    } catch (error) {
        return res.status(500).json({ err: error.message });
    }
});

module.exports = router;