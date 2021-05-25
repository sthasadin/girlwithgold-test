const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  // console.log(req.get('host'));
  if (req.isAuthenticated()) {
    res.json({ status: true, data: req.user });
  } else {
    res.json({ status: false, data: 'You are not logged in.' });
  }
});

module.exports = router;
