import express from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";
import itemRouter from "./item.routes";
const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/items", itemRouter);

export default router;
