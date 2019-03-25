
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

app={};

const userSchema = new Schema({
    username: String,
    googleId: String
});

const fbuserSchema = new Schema({
    username: String,
    fbId: String
});

app.GUser = mongoose.model('Googleuser', userSchema);
app.FbUser = mongoose.model('Facebookuser', fbuserSchema);


module.exports = app;