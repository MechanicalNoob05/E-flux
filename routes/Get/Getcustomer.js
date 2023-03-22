const express = require('express');
const router = express.Router();
var fetchuser = require('../../middleware/fetch')
const Customermodel = require('../../models/Customer');
router.post('/', fetchuser, async (req, res) => {
  ("Processing a add a station");
  try {
    const savedcustomer = await Customermodel.findById(req.user.id)
    return res.status(200).json({ savedcustomer });
  }
  catch (error) {
    return res.status(500).json({ err: error.message });
  }
})
module.exports = router;