import express from "express"
import { subscribe } from "../controllers/subscription.controller"
import { protect, adminProtect } from "../middleware/auth"

const subscriptionRouter = express.Router()

subscriptionRouter.patch('/:id', protect, subscribe) //customer subscribes or unsub to company

export default subscriptionRouter