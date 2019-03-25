const express=require('express');
const bodyparser=require('body-parser');
const routes=require('./crud/routes/index')
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();


mongoose.connect('mongodb://abcd123:abcd123@ds019268.mlab.com:19268/karthik',(err)=>{
    console.log("connnected to mongodb")
});
app.use(cors());
app.use(bodyparser.json());
app.use('/api',routes);

app.listen(3000,()=>{
    console.log("listening on port 3000");
})