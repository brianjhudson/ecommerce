const express = require("express"),
  app = express(),
  {json} = require("body-parser"),
  cors = require("cors"),
  session = require("express-session"),
  passport = require("passport"),
  {Strategy: FacebookStrategy} = require("passport-facebook"),
  config = require("./config.js")
  port = process.env.PORT || 8800,
  mongoose = require("mongoose"),
  User = require("./features/users/User");

app.use(session({secret: process.env.SESSION_SECRET || config.mySecrets.secret}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(json());
app.use(express.static(`${__dirname}/public`));

passport.use(new FacebookStrategy({
    clientID: process.env.CLIENT_ID || config.facebook.clientId,
    clientSecret: process.env.CLIENT_SECRET || config.facebook.secret,
    callbackURL: "https://hudson-ecommerce.herokuapp.com/auth/facebook/callback"
  },
  function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      console.log(profile)
      User.findOne({ 'facebook_id': profile.id }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user); // user found, return that user
        } else {
          var newUser = new User();
            newUser.facebook_id = profile.id;
            newUser.name  = profile.displayName;
            newUser.last = profile.name.familyName;
            if (profile.email) newUser.email = profile.email[0].value;

            newUser.save(function(err) {
                if (err)
                    throw err;

                // if successful, return the new user
                return done(null, profile);

            });
        }
      });
    });

  }));

app.get("/auth/facebook", passport.authenticate("facebook"));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: "https://hudson-ecommerce.herokuapp.com/#/cart",
    failureRedirect: 'https://hudson-ecommerce.herokuapp.com/#/login'
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get("/user", (req, res) => {
  res.send(req.user);
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('https://hudson-ecommerce.herokuapp.com/#/');
});

mongoose.connect(process.env.MONGOURI || config.mongo.mongoUri);
mongoose.connection.once("open", () => console.log(`Connected to MongoDB`));


require("./masterRoutes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
