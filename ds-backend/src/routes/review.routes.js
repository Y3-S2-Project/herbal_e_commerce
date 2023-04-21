import express from "express";
// import { protect, adminProtect } from "../middleware/auth";
import { getAllReviewsController, createProductReviewController } from "../controllers/review.controller";

const userRouter = express.Router();

userRouter.get('/', getAllReviewsController);
userRouter.post('/products', createProductReviewController);

export default userRouter