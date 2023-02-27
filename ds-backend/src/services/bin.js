import { logger } from 'handlebars'
import { bins, findBin, insertBin, findAndUpdateBin, removeBin } from '../repository/bin'

export const createBin = async (data) => {
  console.log(data);
  return await insertBin({ ...data })
}

export const getBins = async (user) => {
  return await bins({ company: user.company })
}

export const getBin = async (company_id, user) => {
  console.log(company_id);
  return await bins({ company: company_id })
}

export const updateBin = async (bin_id, data, user) => {
  let bin = await findBin({ _id: bin_id })
  if (!bin) return { status: 400, message: "Bin doesn't exist to update" }
  return await findAndUpdateBin(bin_id, data)
}

export const deleteBin = async (bin_id, user) => {
  let bin = await findBin({ _id: bin_id })
  if (!bin) return { status: 400, message: "Bin doesn't exist to delete" }
  return await removeBin(bin_id)
}