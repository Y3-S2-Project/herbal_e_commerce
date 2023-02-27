import express from "express";

import {
  addCustomer,

} from "../controllers/customer.controller";
const customerRoute = express.Router();

customerRoute.post("/addcustomer", addCustomer);


module.exports = customerRoute;
