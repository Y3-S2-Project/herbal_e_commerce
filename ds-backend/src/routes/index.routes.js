import express from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";
import productRouter from "./product.routes";
import reviewRouter from "./review.routes";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/reviews", reviewRouter);
router.use("/product", productRouter);

export default router;
