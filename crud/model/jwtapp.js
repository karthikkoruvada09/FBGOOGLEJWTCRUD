
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

app={}


 app.sess=mongoose.model('token', new Schema({
    email : String,
    pass: String
}))


 app.event=mongoose.model('events', new Schema({
    products : String,
    city: String
}))


 app.special=mongoose.model('special', new Schema({
    products : String,
    city: String
}))

module.exports=app;
