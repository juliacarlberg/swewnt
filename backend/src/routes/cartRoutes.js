const express = require("express");
const router = express.Router();

const {
  createCart,
  getCartById,
  deleteCart,
  addProductToCart,
  removeProductFromCart,
} = require("../controllers/cartControllers");

router.get("/:cartId", getCartById);
router.post("/", createCart);
router.delete("/:cartId", deleteCart);
router.post("/:cartId", addProductToCart);
router.put("/:cartId", removeProductFromCart);

module.exports = router;
