const express = require('express');
const router = express.Router();
const BatterybookingModel = require('../../models/Batterybookings');
const stationModel = require('../../models/Station');
const deletebatteryrequestModel = require('../../models/Deletebatteryrequest');
router.delete('/',  async (req, res) => {
    console.log("Processing a request to Delete a User");
    try {
        const { deletebookingid } = req.body;
        const deletedbooking = await deletebatteryrequestModel.findByIdAndDelete(deletebookingid);
        if (!deletedbooking) {
            return res.status(401).json({ msg: "No request was found!", });
        }
        else {
            const deletedmainbooking = await BatterybookingModel.findByIdAndDelete(deletedbooking.Batterybookings);
            let filter = { _id: deletedbooking.Station };
            const savedStations = await stationModel.find({ _id: deletedbooking.Station })
            let Bookings = savedStations[0].Batterybookings
            const index = Bookings.indexOf(deletedbooking.Batterybookings[0]);
            let data = Bookings.splice(index, 1);
            let update = { Batterybookings: Bookings };
            let savedstation = await stationModel.findOneAndUpdate(filter, update, { new: true });
            return res.status(200).json({ msg: "Successfully Deleted User 💀", deletedbooking });
        }
    } catch (error) {
        return res.status(500).json({ err: error.message });
    }
});

module.exports = router;