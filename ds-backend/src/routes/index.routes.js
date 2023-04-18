import express from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";
import productRouter from "./product.routes";
import orderRouter from "./order.routes";
import cartRouter from "./cart.routes";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use("/cart", cartRouter);

export default router;
