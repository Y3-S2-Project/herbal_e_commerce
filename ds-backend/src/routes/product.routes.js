import express from "express";
import { v4 as uuidv4 } from "uuid";

// import {
//   getAll,
//   update,
//   deleteitem,
//   getById,
//   getMyDetails,
// } from "../controllers/item.controller";
import { protect, adminProtect } from "../middleware/auth.js";

const productRouter = express.Router();

// itemRouter.get("/", protect, adminProtect, getAll);
// itemRouter.get("/:id", protect, getMyDetails);
// itemRouter.put("/:id", protect, update);

// itemRouter.get("/:id", protect, adminProtect, getById);

// itemRouter.delete('/:id', protect, deleteitem)

export default productRouter;
