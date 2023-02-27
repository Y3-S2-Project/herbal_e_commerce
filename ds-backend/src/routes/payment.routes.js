import express from "express";
import {
  addPayment,

} from "../controllers/payment.controller";

const paymentRouter = express.Router();

paymentRouter.post("/", addPayment);

export default paymentRouter;
