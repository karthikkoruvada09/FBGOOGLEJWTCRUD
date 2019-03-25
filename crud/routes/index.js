const router=require('express').Router();
const controller=require('../controller/index');
const Jwt=require('jsonwebtoken');

//token middleware

let verifyToken =function(req,res,next){
    if(!req.headers.authorization){
    return   res.status(401).send({message :"unotherized"})
    }
    let token=req.headers.authorization.split(' ')[1];

    try{
        if(token==="null"){
     return   res.status(401).send({message :"unotherized"})
        }
        let payload=Jwt.verify(token,'secret');
        if(!payload){
     return   res.status(401).send({message :"unotherized"})
        }
        req.userId=payload.sub;    //why we are doing this i donno
        next();
    }catch(err){
     return   res.status(401).send({err})

    }
}





router.post('/post',verifyToken, controller.post);

 router.get('/get', controller.get);
 router.put('/put',verifyToken,controller.put);
 router.delete('/delete/:id',verifyToken,controller.delete);


module.exports=router;