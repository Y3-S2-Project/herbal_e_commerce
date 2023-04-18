import express from "express";
// import { protect, adminProtect } from "../middleware/auth";
import { getAllReviewsController } from "../controllers/review.controller";

const userRouter = express.Router();

userRouter.get('/', getAllReviewsController);

export default userRouter