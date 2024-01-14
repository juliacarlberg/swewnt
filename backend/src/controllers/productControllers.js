const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  console.log(products);

  return res.json(products);
};

exports.getProductById = async (req, res) => {
  const productId = req.params.productId;

  const product = await Product.findById(productId);

  return res.json(product);
};

exports.createProduct = async (req, res) => {
  console.log("handling request");
  try {
    const { imageUrl, productName, brand, productPrice } = req.body;

    const newProduct = await Product.create({
      imageUrl,
      productName,
      brand,
      productPrice,
    });

    res.json({ message: "Product created successfully" });
  } catch (error) {
    // Check if the error is a validation error
    if (error.name === "ValidationError") {
      // Send a 400 Bad Request response with details of validation errors
      return res.status(400).json({ errors: error.errors });
    }

    // Handle other types of errors
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
