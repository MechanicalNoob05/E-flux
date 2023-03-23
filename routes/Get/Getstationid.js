const express = require('express');
const router = express.Router();
const StationModel = require('../../models/Station');

router.post('/',async(req,res)=>{
    ("Processing a request to Get Shops");

    try{
        const savedStation = await StationModel.find({_id:req.body.id}).populate("Slot").populate("Timeslot").populate("Battery").populate({path:"Bookings",populate:{path : 'Timeslot'}}).populate({path:"Bookings",populate:{path : 'Slot'}}).populate({path:"Bookings",populate:{path : 'Customer'}});
        return res.status(200).json({savedStation});
    }
    catch(error){
       return res.status(500).json({err:error.message});
    }

})

module.exports = router;