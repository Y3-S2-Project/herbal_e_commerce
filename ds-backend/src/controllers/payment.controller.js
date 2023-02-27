import asyncHandler from "../middleware/async";
import { makeResponse } from "../utils/response";
import { createPayment } from "../services/payment";

export const addPayment = asyncHandler(async (req, res) => {
  const result = await createPayment(req.body);
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: "Failed to add Payment ",
    });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({ res, message: "Payment  added successfully" });
});

