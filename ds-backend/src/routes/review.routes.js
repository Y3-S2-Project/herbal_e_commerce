import express from "express";
// import { protect, adminProtect } from "../middleware/auth";
import { getAllReviewsController, createProductReviewController, deleteProductReviewController, updateProductReviewController } from "../controllers/review.controller";

const userRouter = express.Router();

userRouter.get('/', getAllReviewsController);
userRouter.post('/products', createProductReviewController);
userRouter.delete('/products/delete/:review_id', deleteProductReviewController);
userRouter.put('/products/update/:user_id', updateProductReviewController);

export default userRouter