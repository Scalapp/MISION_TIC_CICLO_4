const JwtStrategy = require("passport-jwt").Strategy;
const Extractwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");

const User = mongoose.model("user");
const keys = require("./config/keys");
const opts = {};

opts.jwtFromRequest = Extractwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOkey;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
