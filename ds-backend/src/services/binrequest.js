import { logger } from "handlebars";
import { getAllBinRequests } from "../repository/binrequest";
import { makeResponse } from "../utils/response";

export const retrieveAllBinRequests = async () => {
  return getAllBinRequests();
};
