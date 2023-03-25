const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3001
var cors = require('cors')
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('hello world')
})


// url routes

app.use('/app/addstation',require('./routes/Add/Addstation'))
app.use('/app/addcustomer',require('./routes/Add/Addcustomer'))
app.use('/app/addreview',require('./routes/Add/Addreview'))
app.use('/app/addbooking',require('./routes/Add/Addbooking'))
app.use('/app/addbatterybooking',require('./routes/Add/Addbatterybooking'))
app.use('/app/adddeleterequest',require('./routes/Add/Adddeleterequest'))
app.use('/app/deletebatteryrequest',require('./routes/Add/deletebatteryrequest'))


app.use('/app/login',require('./routes/Login'))
app.use('/app/loginstation',require('./routes/Loginstation'))


app.use('/app/getstation',require('./routes/Get/Getstation'))
app.use('/app/getstationid',require('./routes/Get/Getstationid'))
app.use('/app/getcustomer',require('./routes/Get/Getcustomer'))
app.use('/app/getbooking',require('./routes/Get/Getbookings'))
app.use('/app/getreview',require('./routes/Get/Getreview'))
app.use('/app/gethistory',require('./routes/Get/Gethistory'))


app.use('/app/deletebooking',require('./routes/Delete/Deletebooking'))
app.use('/app/deletebatterybooking',require('./routes/Delete/Deletebatterybooking'))
app.use('/app/deletebookingid',require('./routes/Delete/Deletebookingid'))
app.use('/app/deletebatteryid',require('./routes/Delete/Deletebatteryid'))


app.use('/app/update',require('./routes/update/updatecustomer'))
app.use('/app/changepassword',require('./routes/update/updatepassword'))


app.listen(process.env.PORT||port, () => {
  console.log(`Example app listening on port ${port}`)
})


mongoose 
 .connect("mongodb+srv://manishsingh:seeta11102007@cluster0.q6nzvjz.mongodb.net/eflux", {
        useNewUrlParser: true,
        useUnifiedTopology: true})   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));