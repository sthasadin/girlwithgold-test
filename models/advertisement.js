const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const advertisementScheme = new mongoose.Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    type: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('advertisement', advertisementScheme);
