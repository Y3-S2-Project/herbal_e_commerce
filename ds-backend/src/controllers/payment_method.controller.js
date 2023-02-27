import asyncHandler from "../middleware/async";
import {
  retrieveAllPaymentMethods,
  createPaymentMethod,
  updatePaymentMethodById,
  getOnePaymentMethodDetails,
  deletePaymentMethod,
} from "../services/payment_method";
import { makeResponse } from "../utils/response";

export const getAllPaymentMethods = asyncHandler(async (req, res) => {
  const data = await retrieveAllPaymentMethods(
    req.query.page,
    req.query.limit,
    req.user
  );
  return makeResponse({
    res,
    data,
    message: "Payment methods retrieved successfully",
  });
});

export const addPaymentMethod = asyncHandler(async (req, res) => {
  const result = await createPaymentMethod(req.body, req.user);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: "Failed to add Payment method",
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({ res, message: "Payment method added successfully" });
});

export const updatePaymentMethod = asyncHandler(async (req, res) => {
  const result = await updatePaymentMethodById(req.params.id, req.body);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: "Failed to update Payment method",
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({
    res,
    data: result,
    message: "Payment method updated successfully",
  });
});

export const getOnePaymentMethod = asyncHandler(async (req, res) => {
  const result = await getOnePaymentMethodDetails(req.params.id);

  //if (result.status!=200) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result.data, message: result.message });
});

export const removePaymentMethod = asyncHandler(async (req, res) => {
  const result = await deletePaymentMethod(req.params.id);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: "Failed to delete Paymend method",
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({ res, message: "Payment method deleted successfully" });
});
