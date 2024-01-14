const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  getProductById,
} = require("../controllers/productControllers");

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:playerId", getProductById);

module.exports = router;
