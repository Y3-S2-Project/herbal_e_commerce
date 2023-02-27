import { logger } from 'handlebars'
import { pickupRequests, findPickupRequest, lastPickupRequests, insertPickupRequest, findAndUpdatePickupRequest, removePickupRequest } from '../repository/pickupRequest'

export const createPickupRequest = async (data) => {

  const result = await lastPickupRequests()
  if (result) {
    data.requestNo = 'PRN-' + (parseInt(result.requestNo.split('-')[1]) + 1)
  } else {
    data.requestNo = 'PRN-1'
  }
  const pickupRequest = await findPickupRequest({ requestNo: data.requestNo })
  if (pickupRequest) return { status: 400, message: 'Already added' }
  return await insertPickupRequest({ ...data })
}

export const getPickupRequests = async (user) => {
  if (user.role === 'CUSTOMER') return pickupRequests({ requestedBy: user._id })
  if (user.role === 'COMPANY') return pickupRequests({ requestReceivedBy: user.company })
  if (user.role === 'ADMIN') return pickupRequests()
}

export const getPickupRequest = async (pickupReq_id, user) => {
  let result;
  if (user.role === 'CUSTOMER') {
    result = await findPickupRequest({ _id: pickupReq_id, requestedBy: user._id })
  }
  if (user.role === 'COMPANY') {
    result = await findPickupRequest({ _id: pickupReq_id, requestReceivedBy: user.company })
  }
  if (user.role === 'ADMIN') {
    result = await findPickupRequest({ _id: pickupReq_id })
  }
  if (!result)
    return {
      status: 400,
      message: "This pickup request doesn't exist "
    }
  return { status: 200, data: result, message: 'Pickup request retrieved successfully' }
}

export const updatePickupRequest = async (pickupReq_id, data, user) => {
  let pickupRequest = await findPickupRequest({ _id: pickupReq_id })
  if (!pickupRequest) return { status: 400, message: "Pickup request doesn't exist to update" }
  return await findAndUpdatePickupRequest(pickupReq_id, data)
}

export const deletePickupRequest = async (pickupReq_id, user) => {
  let pickupRequest = await findPickupRequest({ _id: pickupReq_id })
  if (!pickupRequest) return { status: 400, message: "Pickup request doesn't exist to delete" }
  return await removePickupRequest(pickupReq_id)
}