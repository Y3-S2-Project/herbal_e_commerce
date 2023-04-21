import { getAllReviewsRepository,  createProductReviewRepository } from "../repository/review.repository.js";

export const getAllReviewsService = async () => {
  const reviews = await getAllReviewsRepository();
  return reviews;
};

export const createProductReviewService = async (review) => {
  const { product } = review;
  return await createProductReviewRepository(review, product._id);
};
