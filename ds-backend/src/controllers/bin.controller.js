import asyncHandler from '../middleware/async'
import { getBins, createBin, updateBin, getBin, deleteBin } from '../services/bin'
import { makeResponse } from '../utils/response'


export const addNewBin = asyncHandler(async (req, res) => {
  try {
    req.body.company = req.user.company;
    const result = await createBin(req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Failed to add Bin' })
    if (result.status) return makeResponse({ res, ...result })
    return makeResponse({ res, message: 'Bin added successfully' })
  } catch (error) {
    return makeResponse({ res, status: 500, message: error.message })
  }

})

export const getAllBins = asyncHandler(async (req, res) => {
  const data = await getBins(req.user)
  return makeResponse({ res, data, message: 'Bins retrieved successfully' })
})

export const getBinById = asyncHandler(async (req, res) => {
  const data = await getBin(req.params.id)
  return makeResponse({ res, data, message: 'Bins retrieved successfully' })
})

export const updateBinById = asyncHandler(async (req, res) => {
  const result = await updateBin(req.params.id, req.body, req.user)
  if (!result) return makeResponse({ res, status: 500, message: 'Failed to update Bin' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Bin updated successfully' })
})

export const deleteBinById = asyncHandler(async (req, res) => {
  const result = await deleteBin(req.params.id, req.user)
  if (!result) return makeResponse({ res, status: 500, message: 'Failed to delete Paymend method' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Bin deleted successfully' })
})