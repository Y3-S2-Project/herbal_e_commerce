const express = require('express');
const {protect} = require('../middleware/auth.middleware');
const {createCart, getCartByUserId, updateCart, deleteCart, deleteProductFromCart, getTotalPrice} = require('../controllers/cart.controller');
const router = express.Router();

router.route('/').post(protect, createCart);
router.route("/:userId").get(protect, getCartByUserId).put(protect, updateCart).delete(protect, deleteCart);
router.route('/:userId/:productId').delete(protect, deleteProductFromCart);
// router.route('/:userId/:productId/').put(protect, updateProductQuantity);
router.route('/getTotalPrice/:userId').get(protect, getTotalPrice);

module.exports = router;
