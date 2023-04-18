const asyncHandler = require("express-async-handler");
const Cart = require("../models/cart.model");

//Create new shopping cart
const createCart = asyncHandler(async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    // Check if user already has a cart
    const existingCart = await Cart.findOne({ userId: userId });

    if (existingCart) {
      // If user has an existing cart, add new item to the products array
      existingCart.products.push({ product: productId, quantity: quantity });
      const savedCart = await existingCart.save();
      res.status(201).json(savedCart);
    } else {
      // If user doesn't have a cart, create a new cart and add the item
      const newCart = new Cart({ userId: userId });
      newCart.products.push({ product: productId, quantity: quantity });
      const cartCount = await Cart.countDocuments();
      newCart.cartId = "CID00" + (parseInt(cartCount) + 1);
      const savedCart = await newCart.save();
      res.status(201).json(savedCart);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get shopping cart by user id
const getCartByUserId = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
      .populate("userId", "name")
      .populate("products.product", "quantity");

    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update shopping cart
const updateCart = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (cart) {
      cart.products = req.body.products;
      const updatedCart = await cart.save();
      res.status(200).json(updatedCart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete shopping cart
const deleteCart = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (cart) {
      await cart.delete();
      res.status(200).json({ message: "Cart deleted successfully" });
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete product from shopping cart
const deleteProductFromCart = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (cart) {
      cart.products = cart.products.filter(
        (item) => item.product != req.params.productId
      );
      const updatedCart = await cart.save();
      res.status(200).json(updatedCart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get total price of shopping cart
const getTotalPrice = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
      .populate("userId", "name")
      .populate("products.product", "quantity");

    if (cart) {
      let totalPrice = 0;
      cart.products.forEach((item) => {
        totalPrice += item.product.price * item.quantity;
      });
      res.status(200).json({ totalPrice });
    } else {
      res.status(404).json({ message: "Cart not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = {
    createCart, 
    getCartByUserId,
    updateCart,
    deleteCart,
    deleteProductFromCart,
    getTotalPrice
}
