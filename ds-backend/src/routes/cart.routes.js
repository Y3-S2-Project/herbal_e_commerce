const express = require('express');
import { protect } from "../middleware/auth.js";
const {createCart, getCartByUserId, updateCart, deleteCart, deleteProductFromCart, getTotalPrice} = require('../controllers/cart.controller');
const cartRouter = express.Router();

cartRouter.route("/").post(protect, createCart);
cartRouter.route("/:userId").get(protect, getCartByUserId).put(protect, updateCart).delete(protect, deleteCart);
cartRouter.route('/:userId/:productId').delete(protect, deleteProductFromCart);
// cartRouter.route('/:userId/:productId/').put(protect, updateProductQuantity);
cartRouter.route('/getTotalPrice/:userId').get(protect, getTotalPrice);

export default cartRouter;
