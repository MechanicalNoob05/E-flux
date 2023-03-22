const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const Customermodel = require('../../models/Customer');

router.post('/',async(req,res)=>{
    ("Processing a request to Register");

    try{
        const{Firstname, Lastname, Phonenumber,Password,Carname,Carmodel,Carnumber,Cartype} = req.body;
        if(!Firstname || !Lastname || !Phonenumber,!Password || !Carname || !Carmodel || !Carnumber || !Cartype) {
            return res.status(400).json({ msg: "Not all fields have been entered" });
        }
        if(Password.length <6){
            return res.status(400).json({msg: "Password is too Short."});
        }
        const NumberTaken = await Customermodel.findOne({Phonenumber});
        if(NumberTaken){
            res.status(409).json({msg: "This PhoneNumber is Already Taken."});
            return;
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(Password,salt);
        const Customer = new Customermodel({
            Firstname :Firstname,
            Lastname :Lastname,
            Phonenumber :Phonenumber ,
            Carname :Carname,
            Carmodel :Carmodel,
            Carnumber :Carnumber,
            Cartype :Cartype,
            Password: passwordHash,
        });
         const savedCustomer = await Customer.save();
        return res.status(201).json({savedCustomer});
    }
    catch(error){
       return res.status(500).json({err:error.message});
    }
})

module.exports = router;


