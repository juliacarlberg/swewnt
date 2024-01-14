const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
