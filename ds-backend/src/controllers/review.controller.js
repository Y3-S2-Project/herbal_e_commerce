import asyncHandler from "../middleware/async";
import { makeResponse } from "../utils/response";
import { getAllReviewsService, createProductReviewService, deleteProductReviewService, updateProductReviewService } from "../services/review.services";

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

export const deleteProductReviewController = asyncHandler(async (req, res) => {
  const response = await deleteProductReviewService(req.params.review_id);
  if (!response)
    return makeResponse({
      res,
      status: 500,
      message: "Could not delete the product review",
    });
  if (response.status) return makeResponse({ res, ...response });
  return makeResponse({
    res,
    status: 200,
    data: response.data,
    message: "Product Review deleted succesfully",
  });
});

export const updateProductReviewController = asyncHandler(async (req, res) => {
  const response = await updateProductReviewService(req.params.user_id, req.body);
  if (!response)
    return makeResponse({
      res,
      status: 500,
      message: "Could not update the product review",
    });
  if (response.status) return makeResponse({ res, ...response });
  return makeResponse({
    res,
    status: 200,
    data: response.data,
    message: "Product Review updated succesfully",
  });
});
