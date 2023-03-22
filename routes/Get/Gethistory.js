const express = require('express');
const router = express.Router();
const historyModel = require('../../models/History');
var fetchuser = require('../../middleware/fetch')
router.post('/',fetchuser,async(req,res)=>{
    ("Processing a request to Get Shops");
    try{
        const savedhistory = await historyModel.find({Customer:req.user.id}).populate("Slot").populate("Timeslot").populate("Station");
        return res.status(200).json({savedhistory});
    }
    catch(error){
       return res.status(500).json({err:error.message});
    }

})

module.exports = router;