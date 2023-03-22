const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const Customermodel = require('../../models/Customer');
var fetchuser = require('../../middleware/fetch')

router.post('/', fetchuser, async (req, res) => {
    ("Processing a request to Update User");
    try {
        let filter = { _id:req.user.id};
        const{Firstname, Lastname, Phonenumber,Password,Carname,Carmodel,Carnumber,Cartype} = req.body;
        let update = { 
            Firstname :Firstname,
            Lastname :Lastname,
            Phonenumber :Phonenumber ,
            Carname :Carname,
            Carmodel :Carmodel,
            Carnumber :Carnumber,
            Cartype :Cartype,};
        let savedUser = await Customermodel.findOneAndUpdate(filter, update, { new: true });
        return res.status(200).json({ savedUser });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ err: error.message });
    }

})

module.exports = router;