import asyncHandler from "../middleware/async";
import { makeResponse } from "../utils/response";
import { loginUser, registerUser } from "../services/auth.services";
import { sendTokenResponse } from "../utils/jwt";

export const login = asyncHandler(async (req, res) => {
  const user = await loginUser(req.body);
  if (!user) {
    return makeResponse({ res, status: 500, message: "Failed to login user" });
  }
  if (user.status) {
    return makeResponse({ res, ...user });
  }
  return sendTokenResponse(res, user, "User logged in successfully");
});

export const register = asyncHandler(async (req, res) => {
  const result = await registerUser(req.body);
  if (!result)
    return makeResponse({ res, status: 500, message: "Failed to add user" });
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({
    res,
    status: 201,
    data: result,
    message: "User added successfully",
  });
});
