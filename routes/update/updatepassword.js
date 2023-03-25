const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const Customermodel = require('../../models/Customer');
var fetchuser = require('../../middleware/fetch')

router.post('/', fetchuser, async (req, res) => {
    ("Processing a request to Update User");
    try {
        let filter = {_id:req.user.id};
        const{Newpassword,oldpassword} = req.body;
        const Customer = await Customermodel.findById(req.user.id)
        if (!Customer) {
          return res.status(400).json({ errors: errors.array()});
        }
        const passwordcompare= await bcrypt.compare(oldpassword,Customer.Password)
        if (!passwordcompare) {
          return res.status(400).json({errors:"password does not match"});
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(Newpassword,salt);
        let update = {
            Password: passwordHash
        };
        let savedUser = await Customermodel.findOneAndUpdate(filter, update, { new: true });
        return res.status(200).json({ savedUser });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ err: error.message });
    }

})

module.exports = router;