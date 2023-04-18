import Review from '../models/review.model';
import Product from '../models/product.model';
import logger from '../utils/logger';

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
            locale: 'en',
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
            message: 'Product not found',
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
            message: 'Product Review created successfully',
        };
    } catch (err) {
        console.error(`An error occurred when creating a product review - err: ${err.message}`);
        return {
            status: 500,
            message: 'Could not create the product review',
        };
    }
};


  