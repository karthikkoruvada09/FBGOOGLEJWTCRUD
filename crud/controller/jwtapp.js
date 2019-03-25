app={};
const Jwt=require('jsonwebtoken');
const models=require('../model/jwtapp');

app.register=(req,res)=>{
    const post=new modles.sess(req.body);
    post.save((err,data)=>{
        if(err){
            console.log(err);
        }else{
            res.send({message:"post success"});
        }
    })
};



app.login=(req,res)=>{
    models.sess.find({email:req.body.email},(err,result)=>{
        if(result[0]){
            const token = Jwt.sign({ sub : result[0]._id },'secret')  ;
           // console.log(token);
            res.status(200).send({token})
        }else{
            res.status(401).send({message:"please check ur password and email"})
        }
   
    })
};


app.events=(req,res)=>{
    models.event.find({},(err,data)=>{
        res.send(data);
    })
};



app.specials=(req,res)=>{
   models.special.find({},(err,data)=>{
        res.send(data);
    })
};

module.exports=app;