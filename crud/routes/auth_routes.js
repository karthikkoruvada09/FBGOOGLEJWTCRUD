const router = require('express').Router();
const passport = require('passport');
const Jwt=require('jsonwebtoken');

// //auth GOOGLE
router.get('/logingoogle', (req, res) => {
    const token=Jwt.sign({payload:gtoken},'secret');
   // console.log(token);
    // res.send("success");    --initial step
    res.redirect(`http://localhost:4200/login?token=${token}`);

});
router.get('/google',passport.authenticate('google',{
    scope : ['profile']
})
)
//redirect url for google
let gtoken;
router.get('/google/redirect',passport.authenticate('google', { failureRedirect: 'http://localhost:4200'}),(req,res)=>{
  console.log(req.user);
  gtoken=req.user.googleId;
   res.redirect('/auth/logingoogle')
})



//auth FACEBOOK

let fbtoken;
router.get('/facebook',
  passport.authenticate('facebook',{ scope: ['user_friends', 'manage_pages'] }));

router.get('/facebook/redirect',
  passport.authenticate('facebook', { failureRedirect: 'http://localhost:4200' }),
  function(req, res) {
    console.log(req.user);
    fbtoken=req.user.fbId
    res.redirect('/auth/loginfb');
  });
router.get('/loginfb', (req, res) => {
  // res.send({status:"success"})     ---initial step
  // res.send("success");    --initial step
  const token=Jwt.sign({payload:gtoken},'secret');
   console.log(token);
   res.redirect(`http://localhost:4200/login?token=${token}`);
});

module.exports=router;
