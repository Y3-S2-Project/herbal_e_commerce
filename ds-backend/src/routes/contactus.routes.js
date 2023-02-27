import express from "express";
import {storeContactUsDetails} from "../controllers/contactus.controller";

const contactUsRouter = express.Router();

 contactUsRouter.post("/",storeContactUsDetails);


export default  contactUsRouter;
