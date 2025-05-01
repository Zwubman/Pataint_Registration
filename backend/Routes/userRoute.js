import mongoose from "mongoose";
import express from "express";
import { verifyToken } from "../Middlwares/authMiddleware.js";
import {
  registerUser,
  deleteUser,
  changePassword,
  getAllUsers
} from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", verifyToken, registerUser);
userRouter.delete("/delete", verifyToken, deleteUser);
userRouter.post("/changePassword", verifyToken, changePassword);
userRouter.get("/getAll", verifyToken, getAllUsers);

export default userRouter;