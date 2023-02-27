import { logger } from "handlebars";
import PickupRequest from "../models/pickupRequest.model";
import { findPaymentMethod } from "../repository/payment_method";
import { findPickupRequest } from "../repository/pickupRequest";
import { insertPayment } from "../repository/payment";
import { makeResponse } from "../utils/response";

export const createPayment = async (data) => {
  const paymentMethod = await findPaymentMethod({
    cardNumber: data.cardNumber,
  });
  console.log(data.requestNo);
  const pickupRequest = await PickupRequest.findOne({
    requestNo: data.requestNo,
  });

  if (!paymentMethod)
    return { status: 400, message: "This payment method  does not exists" };
  if (!pickupRequest)
    return { status: 400, message: "This pickuprequest doesn't exists" };
  const result = await insertPayment(data, paymentMethod, pickupRequest);
  if (Object.keys(result).length === 0) {
    return { status: 400, message: "This payment cannot be added" };
  }

  return result;
};
