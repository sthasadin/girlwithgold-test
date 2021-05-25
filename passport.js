const LocalStrategy = require('passport-local').Strategy;
const USER = require('./models/user');
const bcrypt = require('bcrypt');

exports.AUTH = function (passport) {
  //local
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, function (
      email,
      password,
      done
    ) {
      USER.findOne({ email: email }, function (err, foundUser) {
        if (err) {
          console.log(err);
          return done(err);
        }
        if (!foundUser) {
          return done(null, false, { message: `email doesn't exist` });
        }
        bcrypt.compare(password, foundUser.password, function (err, result) {
          if (err) {
            return done(err);
          }
          if (!result) {
            return done(null, false, { message: `password doesn't match` });
          }
          return done(null, foundUser);
        });
      });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });
  passport.deserializeUser(function (id, done) {
    USER.findById(id, function (err, user) {
      done(err, { user });
    });
  });
};
