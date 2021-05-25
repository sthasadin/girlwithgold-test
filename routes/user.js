const express = require('express');
const USER = require('../models/user');
const passport = require('passport');
const bcrypt = require('bcrypt');
const router = express.Router();

let ifChecked = true;

//creating an admin account if one doesn't exist.
if (ifChecked) {
  USER.find({}, function (err, users) {
    if (err) {
      return console.log(err);
    }
    if (users.length > 0) {
      return (ifChecked = false);
    }
    bcrypt.hash('admin', 10, function (err, result) {
      USER.create({ email: 'admin@admin', password: result });
      return (ifChecked = false);
    });
  });
}

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/',
  }),
  function (req, res, next) {
    //if successfully login
    res.json({ status: true, message: 'Successfully logged in!' });
  }
);

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.patch('/update', function (req, res) {
  bcrypt.hash(req.body.password, 10, function (err, result) {
    USER.updateOne(
      { email: 'admin@admin' },
      { password: result },
      { returnOriginal: false },
      function (err, patchedAdmin) {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: err });
        }

        if (patchedAdmin.nModified > 0) {
          return res.json({ status: true });
        }
        res.json({ status: false });
      }
    );
  });
});

module.exports = router;
