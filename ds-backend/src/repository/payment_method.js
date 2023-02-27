import PaymentMethod from "../models/payment_method.model";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
export const getAllPaymentMethods = async (page, limit, user) => {
  return await PaymentMethod.find().catch((err) => {
    logger.error(
      `An error occurred when retrieving PaymentMethods - err: ${err.message}`
    );
  });
};

export const insertPaymentMethod = async (data) => {
  return await new PaymentMethod(data).save();
};

export const findPaymentMethod = async (filters) => {
  return await PaymentMethod.findOne(filters);
};

export const findAndUpdatePaymentMethod = async (filters, data) => {
  //to return the  new document after updating is completed use set new= true

  const {
    expirationDate,
    activeStatus,
    paymentAddress,
    cardNumber,
    cvc,
    postalCode,
  } = data;
  //must include await
  let paymentMethod = await findPaymentMethod(filters);
  console.log(paymentMethod);
  if (expirationDate != null) {
    paymentMethod.expirationDate = expirationDate;
  }
  if (activeStatus != null) {
    paymentMethod.activeStatus = activeStatus;
  }
  if (paymentAddress != null) {
    paymentMethod.paymentAddress = paymentAddress;
  }
  if (cardNumber != null) {
    paymentMethod.cardNumber = cardNumber;
  }
  if (cvc != null) {
    paymentMethod.cvc = cvc;
  }
  if (postalCode != null) {
    paymentMethod.postalCode = postalCode;
  }
  return await paymentMethod.save();
};

export const findAndDeletePaymentMethod = async (filters) => {
  //must include await
  let paymentMethod = await findPaymentMethod(filters);
  return await PaymentMethod.deleteOne(paymentMethod);
};
