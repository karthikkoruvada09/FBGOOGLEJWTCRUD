const passport = require('passport');
const kkeys = require('./keys');
const mongodb = require('../model/user-model');

const GoogleStrategy = require('passport-google-oauth20');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    mongodb.findById(id).then((user) => {
        done(null, user);
    });
});





//PASSPORT GOOGLE



passport.use(
    new GoogleStrategy({

         callbackURL :'/auth/google/redirect',
        clientID : kkeys.google.clientID ,
        clientSecret : kkeys.google.clientSecret    },
        (accessToken,refreshToken,profile,done) =>  {
       mongodb.GUser.findOne({googleId : profile.id},(err,exists)=>{
           if(exists){
            console.log("user already exists");
            done(null,exists);
           }else{
        let user = new mongodb.GUser();
         user.username = profile.displayName
         user.googleId = profile.id      
         done(null, user);
          //console.log(user);
         user.save((err,data)=>{  
        // console.log(data)
            })
           }
       })
    })
);










//PASSPORT FACEBOOK




const FacebookStrategy = require('passport-facebook');

//  PASSPORT GOOGLE
passport.use(new FacebookStrategy({
    clientID: '419097318864797',
    clientSecret: '77e2c9eccc6e1e07b8147e1a13dfc054',
    callbackURL: "/auth/facebook/redirect"
},
    function (accessToken, refreshToken, profile, done) {
        mongodb.FbUser.findOne({ fbId: profile.id }, (err, exists) => {
            if (exists) {
                console.log("user already exists");
                done(null, exists);
            } else {
                // console.log(profile);
                let user = new mongodb.FbUser();
                user.username = profile.displayName
                user.fbId = profile.id
                done(null, user);
                user.save((err, data) => {
                    console.log(data)
                }
                )
            }
        })
    }
));