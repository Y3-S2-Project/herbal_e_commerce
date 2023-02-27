import { logger } from "handlebars";
import {
  findPaymentMethod,
  getAllPaymentMethods,
  insertPaymentMethod,
  findAndUpdatePaymentMethod,
  findAndDeletePaymentMethod,
} from "../repository/payment_method";
import { makeResponse } from "../utils/response";

export const retrieveAllPaymentMethods = async (page, limit, user) => {
  return getAllPaymentMethods(page, limit, user);
};

export const createPaymentMethod = async (data, user) => {
  const PaymentMethod = await findPaymentMethod({
    cardNumber: data.cardNumber,
  });
  if (PaymentMethod)
    return { status: 400, message: "This payment method  already added" };
  return await insertPaymentMethod({ ...data });
};
export const getOnePaymentMethodDetails = async (payment_method_id) => {
  const result = await findPaymentMethod({ _id: payment_method_id });
  console.log(result);
  if (result.length === 0)
    return {
      status: 400,
      message: "This payment method doesn't exist ",
    };
  return {
    status: 200,
    data: result,
    message: "Payment method retrieved successfully",
  };
};

export const updatePaymentMethodById = async (payment_method_id, data) => {
  let PaymentMethod = await findPaymentMethod({ _id: payment_method_id });
  if (!PaymentMethod)
    return { status: 400, message: "Payment method doesn't exist to update" };

  return await findAndUpdatePaymentMethod({ _id: payment_method_id }, data);
};

export const deletePaymentMethod = async (payment_method_id) => {
  let PaymentMethod = await findPaymentMethod({ _id: payment_method_id });
  if (!PaymentMethod)
    return { status: 400, message: "Payment method doesn't exist to delete" };
  return await findAndDeletePaymentMethod({ _id: payment_method_id });
};
