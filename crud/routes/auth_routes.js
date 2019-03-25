const router = require('express').Router();
const passport = require('passport');
const Jwt=require('jsonwebtoken');

// //auth GOOGLE
router.get('/logingoogle', (req, res) => {
    const token=Jwt.sign({payload:gtoken},'secret');
    console.log(token);
    // res.send("success");    --initial step
    res.redirect(`http://localhost:4200/special?token=${token}`);

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


router.get('/facebook',
  passport.authenticate('facebook',{ scope: ['user_friends', 'manage_pages'] }));

router.get('/facebook/redirect',
  passport.authenticate('facebook', { failureRedirect: 'http://localhost:4200' }),
  function(req, res) {
    console.log(req.user)
    res.redirect('/auth/loginfb');
  });
router.get('/loginfb', (req, res) => {
  // res.send({status:"success"})     ---initial step

});

module.exports=router;
