import {
  findSeller,
  insertSeller,
  getAllSellers,
} from "../repository/seller.repository";

export const createSeller = async (data) => {
  const seller = await findSeller({ email: data.email });
  if (seller)
    return { status: 400, message: "This seller email  already added" };

  const SellerExist = await findSeller({ name: data.name });
  if (SellerExist)
    return { status: 400, message: "This seller name already Exist " };

  return await insertSeller({ ...data });
};

export const retrieveAllSellers = async (data) => {
  return getAllSellers(data);
};

export const getSellerDetails = async (seller_id) => {
  const result = await findSeller({ _id: seller_id });

  if (result) {
    return {
      status: 400,
      message: "This seller details doesn't exist ",
    };
  }
  return {
    status: 200,
    data: result,
    message: "Seller details retrieved successfully",
  };
};
