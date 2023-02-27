import express from "express";
import {
  addPaymentMethod,
  updatePaymentMethod,
  getOnePaymentMethod,
  getAllPaymentMethods,
  removePaymentMethod,
} from "../controllers/payment_method.controller";
import { protect, companyProtect } from "../middleware/auth";
const paymentMethodRouter = express.Router();

paymentMethodRouter.post("/", protect, companyProtect, addPaymentMethod);
paymentMethodRouter.patch("/:id", protect, companyProtect, updatePaymentMethod);
paymentMethodRouter.get("/:id", protect, companyProtect, getOnePaymentMethod);
paymentMethodRouter.get("/", protect, companyProtect, getAllPaymentMethods);
paymentMethodRouter.delete(
  "/:id",
  protect,
  companyProtect,
  removePaymentMethod
);

export default paymentMethodRouter;
