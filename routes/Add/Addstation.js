const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const stationModel = require('../../models/Station');
const slotModel = require('../../models/Slot');
const timeslotModel = require('../../models/Timeslot');
const BatteryModel = require('../../models/Battery');

router.post('/',async(req,res)=>{
    ("Processing a add a station");

    try{
        const {Stationname, Stationaddress, Password, Phone, Country,State,City,Zipcode,Description,Priceperunit,Latitude,Longitude,Slot,Timeslot,Battery} = req.body;
        var slotdata=[]
        var timeslotdata=[]
        var Batterydatas=[]
        for (let i = 0; i < Slot.length; i++) {
                const Slotdata = new slotModel({
                Slotname:Slot[i].Slotname,
                Connectortype:Slot[i].Connectortype
            })
            const savedSlot = await Slotdata.save();
            slotdata.push(savedSlot._id);
        };
        for (let i = 0; i < Timeslot.length; i++) {
                const Timeslotdata = new timeslotModel({
                Duration:Timeslot[i].Duration
            })
            const savedTimeslot = await Timeslotdata.save();
            timeslotdata.push(savedTimeslot._id);
        };
        for (let i = 0; i < Battery.length; i++) {
                const Batterydata = new BatteryModel({
                Batteryname:Battery[i].Batteryname,
                Batterycapacity:Battery[i].Batterycapacity,
            })
            const savedBatterydata = await Batterydata.save();
            Batterydatas.push(savedBatterydata._id);
        };
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(Password,salt);
        const Station = new stationModel({
            Stationname: Stationname,
            Stationaddress: Stationaddress,
            Password: passwordHash,
            Phone: Phone,
            Country: Country,
            State: State,
            City: City,
            Zipcode: Zipcode,
            Description: Description,
            Priceperunit: Priceperunit,
            Latitude: Latitude,
            Longitude: Longitude,
            Slot:slotdata,
            Booked:[],
            Battery:Batterydatas,
            Batterybookings:[],
            Timeslot:timeslotdata
        });
        const savedStation = await Station.save();
        return res.status(201).json({savedStation});
    }
    catch(error){
       return res.status(500).json({err:error.message});
    }

})

module.exports = router;