import { error } from "winston";
import asyncHandler from "../middleware/async";
import Customer from "../models/customer.model";

import { makeResponse } from "../utils/response";

//Adding a customer
const addCustomer = asyncHandler(async (req, res) => {
  return await new Customer(req.body).save();
});

module.exports = {
  addCustomer,

};
