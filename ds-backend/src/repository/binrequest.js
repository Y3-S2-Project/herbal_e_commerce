import BinRequest from "../models/binrequest.model";

export const getAllBinRequests = async () => {
  return await BinRequest.find().catch((err) => {
    logger.error(
      `An error occurred when retrieving PaymentMethods - err: ${err.message}`
    );
  });
};
