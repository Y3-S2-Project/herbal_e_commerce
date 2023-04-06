import {
  addAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  removeAdmin,
} from "../dao/admin.dao";


export const createAdmin = async (admin) => {
  return await addAdmin(admin);
};

export const getAllAdmins = async (queries) => {
  return await getAdmins(queries);
};

export const getOneAdmin = async (filters, returnPassword = false) => {
  return getAdmin(filters, returnPassword);
};

export const findOneAndUpdateAdmin = async (filters, data) => {
  return updateAdmin(filters, data);
};

export const findOneAndRemoveAdmin = async (filters) => {
  return await removeAdmin(filters);
};
