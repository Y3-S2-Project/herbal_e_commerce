import asyncHandler from "../middleware/async";
import { makeResponse } from "../utils/response";
import { getAllReviewsService, createProductReviewService } from "../services/review.services";

export const getAllReviewsController = asyncHandler(async (req, res) => {
  const reviews = await getAllReviewsService();
  return makeResponse({
    res,
    status: 200,
    data: reviews,
    message: "Reviews retrieved succesfully",
  });
});

export const createProductReviewController = asyncHandler(async (req, res) => {
  const response = await createProductReviewService(req.body);
  if (!response)
    return makeResponse({
      res,
      status: 500,
      message: "Could not create the product review",
    });
  if (response.status) return makeResponse({ res, ...response });
  return makeResponse({
    res,
    status: 200,
    data: response.data,
    message: "Product Review created succesfully",
  });
});
