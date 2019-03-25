
const router = require('express').Router();
const routes = require('../controller/jwtapp');
const models=require('../model/jwtapp');
const Jwt=require('jsonwebtoken');


// token middlewate 
let verifyToken = function (req, res, next) {
    if (!req.headers.authorization) {
        
        return res.status(401).send({ message: "unotherized" })
    }
    let token = req.headers.authorization.split(' ')[1];
    try {
        if (token === "null") {
         return   res.status(401).send({message :"unotherized"})
        }
        let payload = Jwt.verify(token, 'secret');
        if (!payload) {
            return res.status(401).send({ message: "unotherized" })
        }
        req.userId = payload.sub;    //why we are doing this i donno
        next();
    } catch (err) {
        return res.status(401).send({ err });

    }
}



router.post('/register', routes.register);



router.post('/login', routes.login)

router.get('/events', routes.events)

router.get('/special', verifyToken, routes.specials)


module.exports=router;