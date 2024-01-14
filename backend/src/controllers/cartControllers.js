const Cart = require("../models/Cart");
const Product = require("../models/Product");

exports.createCart = async (req, res) => {
  const newCart = await Cart.create({
    totalPrice: 0,
    productsInCart: [],
  });

  console.log(newCart._id);

  return res
    .setHeader(
      "Location",
      `http://localhost:${process.env.PORT}/api/v1/carts/${newCart._id}`
    )
    .status(201)
    .json(newCart);
};

exports.getCartById = async (req, res) => {
  const cartId = req.params.cartId;
  const cart = await Cart.findById(cartId);

  if (!cart) throw new NotFoundError("This cart does not exist");

  return res.json(cart);
};

exports.deleteCart = async (req, res) => {
  const cartId = req.params.cartId;
  const cartToDelete = await Cart.findById(cartId);
  if (!cartToDelete) throw new NotFoundError("Cart does not exist");
  await cartToDelete.delete();
  return res.sendStatus(204);
};

exports.addProductToCart = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const productId = req.body._id;

    const currentCart = await Cart.findById(cartId);
    const productToAdd = await Product.findById(productId);

    if (!currentCart || !productToAdd) {
      return res.status(404).json({ error: "Cart or product not found" });
    }

    const existingProduct = currentCart.productsInCart.find(
      (product) => product._id == productId
    );

    if (existingProduct) {
      existingProduct.productQuantity++;
    } else {
      currentCart.productsInCart.push(productToAdd);
    }

    currentCart.totalPrice = calculateTotalPrice(currentCart.productsInCart);
    await currentCart.save();

    return res.json(currentCart);
  } catch (error) {
    console.error(error); // Log the specific error details
    return res.status(500).json({ error: "Internal server error" });
  }
};

function calculateTotalPrice(products) {
  return products.reduce((total, product) => {
    return total + product.productPrice * product.productQuantity;
  }, 0);
}

exports.removeProductFromCart = async (req, res) => {
  const cartId = req.params.cartId;
  const productId = req.body.productId;

  const currentCart = await Cart.findById(cartId);

  for (let i = 0; i < currentCart.productsInCart.length; i++) {
    if (currentCart.productsInCart[i].id === productId) {
      currentCart.productsInCart[i].productQuantity--;
      await currentCart.save();

      if (currentCart.productsInCart[i].productQuantity == 0) {
        currentCart.productsInCart.splice([i], 1);
        await currentCart.save();
      }
    }
  }

  if (currentCart.productsInCart.length < 1) {
    currentCart.totalPrice = 0;
    await currentCart.save();
    throw new NotFoundError("This cart is empty");
  }

  currentCart.totalPrice = 0;

  for (let i = 0; i < currentCart.productsInCart.length; i++) {
    currentCart.totalPrice +=
      currentCart.productsInCart[i].productPrice *
      currentCart.productsInCart[i].productQuantity;
  }

  await currentCart.save();
  return res.send(currentCart);
};
