const passport = require('passport');

const express = require('express')
const auth = require('./helper/AuthHelper')
const path = require('path');
const app = express();
app.set('view engine', 'ejs');

//Initialise Passport Wrapper
app.use(passport.initialize())

// Home Route
app.get('/',
    passport.authenticate('google', { scope: ['email', 'profile'] }),
    (req, res) => {
        return res.send("Authentication in progress");
    });


// login : response from OATH configured in GCP for this uri 
app.get('/login'
    , passport.authenticate('google', { scope: ['email', 'profile'] }),
    (req, res) => {
        console.log(req.user);
        return res.sendFile(path.join(__dirname + '/public/sso.jpg'));
    });


// home page to test platform sign in method 
    app.get('/home',
    (req, res) => {
        return res.sendFile(path.join(__dirname + '/public/index.html'));
    })

module.exports = app;