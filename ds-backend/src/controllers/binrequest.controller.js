import asyncHandler from "../middleware/async";
import {
retrieveAllBinRequests
} from "../services/binrequest";
import { makeResponse } from "../utils/response";

export const getAllBinRequests = asyncHandler(async (req, res) => {
  const data = await retrieveAllBinRequests();
  return makeResponse({
    res,
    data,
    message: "Payment methods retrieved successfully",
  });
});
