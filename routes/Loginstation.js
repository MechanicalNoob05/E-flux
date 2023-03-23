const express = require('express');
const Stationmodel = require('../models/Station');
const route=express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Manishisbest';

route.post('/',[body('Password','Enter a valid password').exists()], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()});
    }
    const {id,Password}=req.body;
    try {
      const Station= await Stationmodel.findById(id);
      if (!Station) {
        return res.status(400).json({ errors: errors.array()});
      }
      const passwordcompare= await bcrypt.compare(Password,Station.Password)
      if (!passwordcompare) {
        return res.status(400).json({success,errors: errors.array()});
      }
      const data={
        station:{
         id:Station._id
        }
      }
      const jwttoken=jwt.sign(data,JWT_SECRET)
      res.json({jwttoken})
    } catch (err) {
      res.json({ errors:'please enter a valid email', message: err.message})
    }
  })
  module.exports=route