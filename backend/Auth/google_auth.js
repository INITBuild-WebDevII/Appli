const passport = require('passport');
const { googleSignUp } = require('../Controllers/userController');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
    // callbackURL: "http://localhost:3000"
  }, 
  function(accessToken, refreshToken, profile, done) {
        console.log("PASSPORT CALLBACK")
        
        const test = googleSignUp(profile)
        test.then(function (results) {
            return done(null, profile, results);
        })
  }
));

passport.serializeUser(function(user,done) {
    done(null, user)
});

passport.deserializeUser(function(user, done) {
    done(null, user)
})