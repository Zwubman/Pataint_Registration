import mongoose from "mongoose";
import express from "express";
import {
  verifyToken,
  checkSuperAdminRole,
} from "../Middlwares/authMiddleware.js";
import {
  registerUser,
  deleteUser,
  changePassword,
  getAllUsers,
  addPhone,
  updateEmail,
  signIn,
  signOut,
} from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", verifyToken, checkSuperAdminRole, registerUser);
userRouter.post("/signin", signIn);
userRouter.post("/signout", verifyToken, signOut);
userRouter.delete("/delete-user", verifyToken, checkSuperAdminRole, deleteUser);
userRouter.post("/change-password", verifyToken, changePassword);
userRouter.get("/get-all", verifyToken, getAllUsers);
userRouter.post("/add-phone", verifyToken, addPhone);
userRouter.put("/update-email", verifyToken, updateEmail);

export default userRouter;
