const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
  },
  productsInCart: [
    {
      name: {
        type: String,
        minlength: 2,
      },
      productPrice: {
        type: Number,
        required: true,
      },
      productQuantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

module.exports = mongoose.model("Cart", CartSchema);
