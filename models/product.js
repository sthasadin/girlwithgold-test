const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
    },
    productDescription: {
      type: String,
    },
    productBrand: {
      type: String,
    },
    productPrice: {
      type: Number,
    },
    productType: {
      type: String,
    },
    productImages: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
