const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const reviewModel = require('../../models/Review');
var fetchuser = require('../../middleware/fetch')
router.post('/',fetchuser,async(req, res) => {
    ("Processing a add a station");

    try{
        const {Star, Detail, Stationid} = req.body;
        const Review = new reviewModel({
            Star: Star,
            Detail: Detail,
            Stationid: Stationid,
            Customerid:req.user.id
        });
        const savedReview = await Review.save();
        return res.status(201).json({savedReview});
    }
    catch(error){
       return res.status(500).json({err:error.message});
    }
  })
module.exports=router