import Company from "../models/company.model";
import mongoose from "mongoose";

export const getAllCompany = async (data) => {

  return await Company.find(data);

};

export const insertCompnay = async (data) => {

  return await new Company(data).save();

};

export const findCompany = async (filters) => {

  return await Company.findOne(filters);

};