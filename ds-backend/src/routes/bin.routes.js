import express from "express";
import { addNewBin, updateBinById, getBinById, getAllBins, deleteBinById } from "../controllers/bin.controller";
import { protect, companyProtect } from "../middleware/auth";

const binsRouter = express.Router();

binsRouter.post("/", protect, companyProtect, addNewBin);
binsRouter.patch("/:id", protect, companyProtect, updateBinById);
binsRouter.get("/:id", getBinById);
binsRouter.get("/", protect, getAllBins);
binsRouter.delete("/:id", protect, companyProtect, deleteBinById)

export default binsRouter;
