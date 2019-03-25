const express=require('express');
const Jwt=require('jsonwebtoken');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');


//passport
const passportsetup =require('./crud/config/passport-setup');
const passport = require('passport');
const authRoutes = require('./crud/routes/auth_routes');
const app=express();




//middlewares
app.use(cors());
app.use(bodyparser.json());
mongoose.connect('mongodb://abcd123:abcd123@ds019268.mlab.com:19268/karthik',(err)=>{
    console.log("connnected to mongodb")
});


// initialize passport

app.use(passport.initialize());
app.use(passport.session());



//crud api combining
const jwtroutes=require('./crud/routes/jwtapp')
const routes=require('./crud/routes/index')
app.use('/api',routes);
app.use('/jwt',jwtroutes)


//api integration GOOGLE AND FACEBOOK
app.use('/auth', authRoutes);




app.listen(3000,()=>{
    console.log(`working on port 3000`)
})


