const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
var k;


// let reqLogTIme;
// let checkTime;
// //for momenntjs
// const moment = require('moment');
// app.use((req, res, next) => {
//     const hoursStartingFromDay = moment().startOf('day').fromNow().split(' ')[0];
//     const minutesStartingFromHour = (moment().format('LT').split(':')[1]).replace("PM", "");
//      reqLogTIme = (hoursStartingFromDay * 60 + parseInt(minutesStartingFromHour));    //it is from the starrting of the day
//      checkTime = reqLogTIme + 60;    //here 60 is set in the point of view of setinterval interval not as time
//         setInterval(()=>{
//             reqLogTIme++;
//             if(reqLogTIme==checkTime){
//                 console.log("you are about to logged out")   //here return res.send()   to logout 
//             }
//         },1000)
//     next()
// });

app.use(bodyparser.json());
app.use(session({
    secret: "karthik",
    // cookie:{
    //     maxAge : 5000
    // }
}));


mongoose.connect('mongodb://abcd123:abcd123@ds019268.mlab.com:19268/karthik', { useNewUrlParser: true });

const Schema = mongoose.Schema;
const sess = mongoose.model('session', new Schema({
    name: String,
    pass: String
}))


//posts

app.post('/post', (req, res) => {
    console.log(req.body)
    const sessiondata = new sess({
        name: req.body.name,
        pass: req.body.pass
    })
    sessiondata.save((err, data) => {
        console.log(data);
        res.send("post success");
    })
})



app.get('/get/:pass', async (req, res) => {
    // console.log(req.params)
    const loggedinpersonid = await sess.find({ pass: req.params.pass })
    // console.log(loggedinpersonid);
    req.session.id = loggedinpersonid._id;
    k = req.session.id;
    //  console.log(k);
    res.send("created session");
});

app.get('/', (req, res) => {
    res.send("try again session expired");
});

app.get('/access', (req, res) => {
    console.log(req.session.id)
    if (req.session.id == k) {                        //after session deleted it is giving new hashed id.....I donno
        res.send("verifying session");
    } else {
        res.redirect('/');
    }
});

app.get('/delete', (req, res) => {

    console.log(req.session.id);
    req.session.destroy();
    res.send("deleted session");
});



app.listen(3000, () => {
    console.log("running on port 3000")
})


// let arr = [];
// //for momenntjs
// const moment = require('moment');
// app.use((req, res, next) => {
//     const hoursStartingFromDay = moment().startOf('day').fromNow().split(' ')[0];
//     const minutesStartingFromHour = (moment().format('LT').split(':')[1]).replace("PM", "");
//     let reqLogTIme = (hoursStartingFromDay * 60 + parseInt(minutesStartingFromHour));    //it is from the starrting of the day
//     const checkTime = reqLogTIme + 60;    //here 60 is set in the point of view of setinterval interval not as time
//     arr.push(reqLogTIme);
//     console.log(arr);
//     console.log(reqLogTIme - arr[arr.length - 2]);
//     next()
// });
// setInterval(() => {
//     // console.log(reqLogTIme-arr[arr.length -2])
//     if (reqLogTIme && reqLogTIme - arr[arr.length - 2] > 1) {
//         console.log("you are about to loggedout");
//     } else if (reqLogTIme - arr[arr.length - 1]) {
//         reqLogTIme++;
//         if (reqLogTIme == checkTime) {
//             console.log("destroyed")
//             //req.session.destroy();
//         }
//     }
// }, 1000);