const passport = require('passport');
const runtime = require('../config/runtime')
const AuthHelper = require('passport-google-oauth20').Strategy;


function getProfileData(profile) {
    let imageUrl = '';
    if (profile.photos && profile.photos.length) {
        imageUrl = profile.photos[0].value;
    }
    return {
        id: profile.id,
        displayName: profile.displayName,
        image: imageUrl,
    };
}

passport.use(new AuthHelper({
    clientID: runtime.clientId,
    clientSecret: runtime.secret,
    callbackURL: runtime.callback,
    accessType: runtime.accessType,
    userProfileURL: runtime.userProfileURL,
},
    (accessToken, refreshToken, profile, cb) => {
        console.log("accessToken is"+accessToken);
        cb(null, getProfileData(profile));
    }));
    
passport.serializeUser((user, cb) => {
    cb(null, user);
});
passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});