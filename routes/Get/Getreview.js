const express = require('express');
const router = express.Router();
const reviewmodel = require('../../models/Review');
router.post('/',async (req, res) => {
  ("Processing a add a station");
  try {
    const {Stationid} = req.body;
    const savedreview= await reviewmodel.find({Stationid:Stationid})
    return res.status(200).json({ savedreview });
  }
  catch (error) {
    return res.status(500).json({ err: error.message });
  }
})
module.exports = router;