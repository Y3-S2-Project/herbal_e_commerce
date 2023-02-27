import express from "express";
import { getAllBinRequests } from "../controllers/binrequest.controller";

const binRequestRouter = express.Router();

binRequestRouter.post("/payments", getAllBinRequests);

export default binRequestRouter;
