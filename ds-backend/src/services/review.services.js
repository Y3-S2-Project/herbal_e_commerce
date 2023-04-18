import { getAllReviewsRepository } from "../repository/review.repository.js";

export const getAllReviewsService = async (query) => {
  const reviews = await getAllReviewsRepository(query);
  return reviews;
};
