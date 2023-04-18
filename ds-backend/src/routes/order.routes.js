const express = require("express");
const { protect } = require("../middleware/auth.middleware");
const {createOrder, getAllOrders, getOrderById, updateOrderStatus, deleteOrder} = require("../controllers/order.controller");
const router = express.Router();

router.route("/").post(protect, createOrder).get(protect, getAllOrders);
router.route("/:orderId").get(protect, getOrderById).put(protect, updateOrderStatus).delete(protect, deleteOrder);

module.exports = router;