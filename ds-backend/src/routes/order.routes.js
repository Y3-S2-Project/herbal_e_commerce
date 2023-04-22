const express = require("express");
import { adminProtect, protect } from "../middleware/auth.js";
const {createOrder, getAllOrders, getOrderById, updateOrderStatus, deleteOrder} = require("../controllers/order.controller");
const orderRouter = express.Router();

orderRouter.route("/").post(protect, createOrder).get(protect, getAllOrders);
orderRouter.route("/:orderId").get(protect, getOrderById).put(protect, updateOrderStatus).delete(protect, deleteOrder);
orderRouter.route("/getllorders").get(protect, adminProtect, getAllOrders);

export default orderRouter;