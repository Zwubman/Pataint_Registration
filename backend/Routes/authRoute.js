import mongoose from "mongoose";
import express from "express";
import { signIn, signOut } from "../Controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/signin", signIn);
authRouter.post("/signout", signOut);

  export default authRouter;