import asyncHandler from "../middleware/async";
import { makeResponse } from "../utils/response";
import { getAllReviewsService } from "../services/review.services";

export const getAllReviewsController = asyncHandler(async (req, res) => {
  const reviews = await getAllReviewsService(req.query);
  return makeResponse({
    res,
    status: 200,
    data: reviews,
    message: "Reviews retrieved succesfully",
  });
});
