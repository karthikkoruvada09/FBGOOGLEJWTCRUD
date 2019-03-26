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

//combining frontend
const path=require('path');
//app.use(express.static(path.join(__dirname,'/dist/jwt-mvc')))


//middlewares
app.use(cors());
app.use(bodyparser.json());
mongoose.connect('mongodb://abcd123:abcd123@ds019268.mlab.com:19268/karthik',(err)=>{
    console.log("connnected to mongodb")
});


// initialize passport

app.use(passport.initialize());
app.use(passport.session());



// //automatic loggout for idle state user 
// const moment = require('moment');

// let reqLogTIme;
// let checkTime;
// app.use((req, res, next) => {
//     const hoursStartingFromDay = moment().startOf('day').fromNow().split(' ')[0];
//     const minutesStartingFromHour = (moment().format('LT').split(':')[1]).replace("PM", "");
//      reqLogTIme = (hoursStartingFromDay * 60 + parseInt(minutesStartingFromHour));    //it is from the starrting of the day
//      checkTime = reqLogTIme + 10;    //here 60 is set in the point of view of setinterval interval not as time;
//     //  req.reqLogTIme=reqLogTIme;
//     //   req.checkTime=checkTime;
//       setInterval(()=>{
//         reqLogTIme++;
//         if(reqLogTIme==checkTime){
//             console.log(" Boooom");
//             res.redirect('http://localhost:4200');  
//         }
//     },1000)
//     next()
// });



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


