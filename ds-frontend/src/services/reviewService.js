import { axiosInstance } from './core/axios'

export const getAllReviews = async () => {
  try {
    const response = await axiosInstance.get(`/reviews`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all reviews:", error);
    throw error;
  }
};

export const getReviewById = async (reviewId) => {
  try {
    const response = await axiosInstance.get(`/reviews/${reviewId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching review with ID ${reviewId}:`, error);
    throw error;
  }
};

export const getReviews = async (review) => {
    try {
        const response = await axiosInstance.get(`/reviews/read-reviews?${Object.keys(review)[0]}=${Object.values(review)[0]}`,);
        return response.data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error;
    }
}

export const createProductReview = async (productReview) => {
  try {
    const response = await axiosInstance.post(`/reviews/products/create`, productReview);
    return response.data;
  } catch (error) {
    console.error("Error creating product review:", error);
    throw error;
  }
};

export const createSellerReview = async (sellerReview) => {
  try {
    const response = await axiosInstance.post(`/reviews/sellers/create`, sellerReview);
    return response.data;
  } catch (error) {
    console.error("Error creating seller review:", error);
    throw error;
  }
};

export const deleteProductReview = async (reviewId) => {
  try {
    const response = await axiosInstance.delete(`/reviews/products/delete/${reviewId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product review with ID ${reviewId}:`, error);
    throw error;
  }
};

export const deleteSellerReview = async (reviewId) => {
  try {
    const response = await axiosInstance.delete(`/reviews/sellers/delete/${reviewId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting seller review with ID ${reviewId}:`, error);
    throw error;
  }
};

export const updateProductReview = async (productReview) => {
  try {
    const response = await axiosInstance.put(`/reviews/products/update/${productReview.id}`, productReview);
    return response.data;
  } catch (error) {
    console.error(`Error updating product review with ID ${productReview.id}:`, error);
    throw error;
  }
};

export const updateSellerReview = async (sellerReview) => {
  try {
    const response = await axiosInstance.put(`/reviews/sellers/update/${sellerReview.id}`, sellerReview);
    return response.data;
  } catch (error) {
    console.error(`Error updating seller review with ID ${sellerReview.id}:`, error);
    throw error;
  }
};
