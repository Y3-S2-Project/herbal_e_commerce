import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import { subscribeCompany } from '../services/subscription'


export const subscribe = asyncHandler(async (req, res) => {
    const result = await subscribeCompany(req.user.customer, req.params.id)
    if (!result) return makeResponse({ res, status: 200, message: 'Unsubscribed company' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, status: 200, data: result, message: 'Subscribed company' })
})
