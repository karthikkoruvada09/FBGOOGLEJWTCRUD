const mongoose=require('mongoose');
const Schema=mongoose.Schema;

module.exports=mongoose.model('crudOperarions',new Schema({
    name: {type:String,required:true},
    pass :{type:String,required :true},
    city :{type : String,required:true},
    phnno :{type:String,required:true},
    gender :{type:String,required:true},
    shuttle :Boolean,
    cricket :Boolean,
    basketball :Boolean
    
}))