import asyncHandler from '../middleware/async'
import { getPickupRequests, createPickupRequest, updatePickupRequest, getPickupRequest, deletePickupRequest } from '../services/pickuprequest'
import { makeResponse } from '../utils/response'


export const addPickupRequest = asyncHandler(async (req, res) => {
  try {
    req.body.requestedBy = req.user._id;
    const result = await createPickupRequest(req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to add Pickup Request' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, message: 'Pickup Request added successfully' })
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message })
  }

})

export const getAllPickupRequests = asyncHandler(async (req, res) => {
  const data = await getPickupRequests(req.user)
  return makeResponse({ res, data, message: 'Pickup Requests retrieved successfully' })
})

export const getPickupRequestById = asyncHandler(async (req, res) => {
  const result = await getPickupRequest(req.params.id, req.user)
  return makeResponse({ res, data: result.data, message: result.message })
})

export const updatePickupRequestById = asyncHandler(async (req, res) => {
  const result = await updatePickupRequest(req.params.id, req.body, req.user)
  if (!result) return makeResponse({ res, status: 500, message: 'Failed to update Pickup Request' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Pickup Request updated successfully' })
})

export const deletePickupRequestById = asyncHandler(async (req, res) => {
  const result = await deletePickupRequest(req.params.id, req.user)
  if (!result) return makeResponse({ res, status: 500, message: 'Failed to delete Paymend method' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Pickup Request deleted successfully' })
})