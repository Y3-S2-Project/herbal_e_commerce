import express from "express";
import { addPickupRequest, updatePickupRequestById, getPickupRequestById, getAllPickupRequests, deletePickupRequestById } from "../controllers/pickupRequest.controller";
import { protect, customerProtect } from "../middleware/auth";

const pickupRequestRouter = express.Router();

pickupRequestRouter.post("/", protect, customerProtect, addPickupRequest);
pickupRequestRouter.patch("/:id", protect, updatePickupRequestById);
pickupRequestRouter.get("/:id", protect, getPickupRequestById);
pickupRequestRouter.get("/", protect, getAllPickupRequests);
pickupRequestRouter.delete("/:id", protect, deletePickupRequestById)

export default pickupRequestRouter;
