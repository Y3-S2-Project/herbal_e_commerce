import {
  getAllUsers,
  getOneUser,
  findOneAndUpdateUser,
} from "../repository/user.repository";

export const getUsers = async (query) => {
  return await getAllUsers(query);
};

export const addNewUser = async (userDetails) => {
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const newUser = await createUser({
    ...userDetails,
    password: encryptedPassword,
  });

  return newUser;
};

export const getUserByID = async (id) => {
  const user = await getOneUser({ _id: id });
  if (!user)
    return {
      status: 404,
      message: "Invalid user ID",
    };
  return user;
};

export const updateUserdetails = async (userId, user, userDetails) => {
  let userData;

  // if (user.role !== 'ADMIN' && userId.toString() !== user._id.toString()) return { status: 403, message: 'You are not authorized to update this user' }

  if (userDetails.email) {
    userData = await getOneUser({ name: userDetails.email }, false);
    if (userData && userData?._id.toString() !== userId.toString())
      return { status: 422, message: "Name is already taken" };
  }

  if (userDetails.role || userDetails.earnings) {
    return {
      status: 400,
      message: "Role and earnings cannot be updated",
    };
  }

  const updatedUser = await findOneAndUpdateUser({ _id: userId }, userDetails);
  if (!updatedUser)
    return {
      status: 404,
      message: "User not found",
    };
  return updatedUser;
};
