const express = require('express');
const router = express.Router();
const ADS = require('../models/advertisement');

router
  .route('/')
  .get(function (req, res) {
    ADS.find({})
      .populate({
        path: 'productId',
        select: ['productName', 'productPrice', 'productImages'],
      })
      .exec(function (err, foundedAds) {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: 'Something we wrong.' });
        }
        res.json(foundedAds);
      });
  })
  .post(function (req, res) {
    if (
      req.body.type === 'newSection' ||
      req.body.type === 'featureSection' ||
      req.body.type === 'presentationSection'
    ) {
      ADS.create(req.body, function (err, createdAD) {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: 'Something went wrong.' });
        }
        res.json(createdAD);
      });
    } else {
      return res.status(400).json({
        error: 'Please choose one of the advertisement type placement.',
      });
    }
  });

router.route('/:id').get(function (req, res) {
  ADS.findById(req.params.id, function (err, Ad) {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: 'Something went wrong. Please try again later' });
    }
    if (!Ad) {
      return res.status(404).json({ error: 'Provided id was bad.' });
    }
    return res.json(Ad);
  });
});

module.exports = router;
