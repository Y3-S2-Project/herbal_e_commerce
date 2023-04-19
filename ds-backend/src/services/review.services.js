import { getAllReviewsRepository,  createProductReviewRepository, deleteProductReviewRepository, updateProductReviewRepository } from "../repository/review.repository.js";

export const getAllReviewsService = async () => {
  const reviews = await getAllReviewsRepository();
  return reviews;
};

export const createProductReviewService = async (review) => {
  const { product } = review;
  return await createProductReviewRepository(review, product._id);
};

export const deleteProductReviewService = async (review_id) => {
  return await deleteProductReviewRepository(review_id);
}

export const updateProductReviewService = async (user_id, reviewData) => {
  const { _id } = reviewData;
  return await updateProductReviewRepository(_id, user_id, reviewData);
}