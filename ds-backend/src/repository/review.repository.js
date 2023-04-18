import Review from '../models/review.model';
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