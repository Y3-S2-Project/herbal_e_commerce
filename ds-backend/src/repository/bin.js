import Bin from '../models/bin.model'

export const insertBin = async (data) => {
  return await new Bin(data).save()
}

export const bins = async (filters) => {
  return await Bin.find(filters)
}

export const findBin = async (filters) => {
  return await Bin.findOne(filters)
}

export const findAndUpdateBin = async (id, data) => {
  return await Bin.findByIdAndUpdate(id, data, { new: true });
}

export const removeBin = async (id) => {
  return await await Bin.findByIdAndRemove(id);
}