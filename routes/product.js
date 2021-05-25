const express = require('express');
const router = express.Router();
const PRODUCT = require('../models/product');

router.get('/count', function (req, res) {
  PRODUCT.countDocuments({}, function (err, count) {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: err });
    }
    res.json({ count: count });
  });
});

router
  .route('/')
  .post(function (req, res) {
    PRODUCT.create(req.body, function (err, createdProduct) {
      if (err) {
        return console.log(err);
      }
      console.log(`Created a document.`);
      res.json(createdProduct);
    });
  })
  .get(function (req, res) {
    PRODUCT.find(req.body, function (err, allProduct) {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err });
      }
      res.json(allProduct);
    });
  })
  .delete(function (req, res) {
    PRODUCT.deleteMany({}, function (err, result) {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: err });
      }
      res.json(result);
    });
  });

function advertisement(req, res, next) {
  PRODUCT.find({}, function (err, products) {
    if (err) {
      return console.log(err);
    }
    req.advertisements = products;
    return next();
  });
}

router
  .route('/:id')
  .get(advertisement, function (req, res) {
    PRODUCT.findById(req.params.id, function (err, foundProduct) {
      if (err) {
        return console.log(err);
      }
      res.json({ products: foundProduct, advertisements: req.advertisements });
    });
  })
  .put(function (req, res) {
    PRODUCT.replaceOne(
      { _id: req.params.id },
      req.body,
      function (err, newProduct) {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: err });
        }
        res.json(newProduct);
      }
    );
  })
  .patch(function (req, res) {
    PRODUCT.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { returnOriginal: false },
      function (err, patchedProduct) {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: err });
        }
        res.json(patchedProduct);
      }
    );
  })
  .delete(function (req, res) {
    PRODUCT.findByIdAndDelete(req.params.id, function (err, result) {
      if (err) {
        console.log(err);
        return res.status(500).json({ result: false });
      }
      res.json({ result: true });
    });
  });

router.get('/pagination/:currentpage', function (req, res) {
  const productsPerPage = 9; //how much load
  const currentPage = req.params.currentpage * productsPerPage; //how much to skip

  PRODUCT.find(
    {},
    null,
    {
      skip: currentPage,
      limit: productsPerPage,
      sort: { productImage: 'asc' },
    },
    function (err, result) {
      if (err) {
        return console.log(err);
      }
      //if the document/table is not empty then send them including total rows
      PRODUCT.countDocuments({}, function (err, count) {
        const paginationTotal = Math.ceil(count / productsPerPage);
        const paginationArray = [];
        for (let i = 0; i < paginationTotal; i++) {
          paginationArray.push(i);
        }

        return res.json({ products: result, count: paginationArray });
      });
    }
  );
});

module.exports = router;
