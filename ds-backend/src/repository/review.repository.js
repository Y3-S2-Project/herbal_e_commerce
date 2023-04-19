import Review from "../models/review.model";
import Product from "../models/product.model";
import logger from "../utils/logger";

export const getAllReviewsRepository = async ({
  sort = {},
  filter = {},
  page,
  limit = 10,
}) => {
  const options = {
    page,
    limit,
    collation: {
      locale: "en",
    },
  };

  if (Object.keys(sort).length > 0) options.sort = sort;

  const aggregateQuery = () =>
    Review.aggregate([
      {
        $match: filter,
      },
    ]);

  return await (page
    ? Review.aggregatePaginate(aggregateQuery(), options)
    : aggregateQuery()
  ).catch((err) => {
    logger.error(
      `An error occurred when retrieving reviews - err: ${err.message}`
    );
    throw err;
  });
};

export const createProductReviewRepository = async (reviewData, product_id) => {
  const product = await Product.findById(product_id);
  if (!product) {
    return {
      status: 404,
      message: "Product not found",
    };
  }

  const review = new Review({
    ...reviewData,
    product: product_id,
  });

  try {
    const savedReview = await review.save();
    // Add the new review to the product's pReviews array
    product.pReviews.push(savedReview._id);
    await product.save();
    return {
      status: 200,
      data: savedReview,
      message: "Product Review created successfully",
    };
  } catch (err) {
    console.error(
      `An error occurred when creating a product review - err: ${err.message}`
    );
    return {
      status: 500,
      message: "Could not create the product review",
    };
  }
};

export const deleteProductReviewRepository = async (review_id) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(review_id);
    if (!deletedReview) {
      return {
        status: 404,
        message: "Review not found",
      };
    }
    await Product.updateOne(
      { _id: deletedReview.product },
      { $pull: { pReviews: deletedReview._id } }
    );
    return {
      status: 200,
      data: deletedReview,
      message: "Product Review deleted successfully",
    };
  } catch (err) {
    console.error(
      `An error occurred when deleting a product review - err: ${err.message}`
    );
    return {
      status: 500,
      message: "Could not delete the product review",
    };
  }
};

export const updateProductReviewRepository = async (
  review_id,
  user_id,
  reviewData
) => {
  try {
    const review = await Review.findById(review_id);
    //check if the review exists
    if (!review) {
      return {
        status: 404,
        message: "Review not found",
      };
    }
    //check if the user created the review
    if (review.user.toString() !== user_id) {
      return {
        status: 401,
        message: "User not authorized",
      };
    }
    //check if the product exists
    const product = await Product.findById(review.product);
    if (!product) {
      return {
        status: 404,
        message: "Product not found",
      };
    }
    //check if the review exists in the product's pReviews array
    const existingReview = product.pReviews.find(
      (r) => r.toString() === review_id
    );
    if (!existingReview) {
      return {
        status: 404,
        message: "Review not found for this product",
      };
    }
    //update the review
    const updatedReview = await Review.findByIdAndUpdate(
      review_id,
      reviewData,
      { new: true }
    );
    return {
      status: 200,
      data: updatedReview,
      message: "Product Review updated successfully",
    };
  } catch (err) {
    console.error(
      `An error occurred when updating a product review - err: ${err.message}`
    );
    return {
      status: 500,
      message: "Could not update the product review",
    };
  }
};
