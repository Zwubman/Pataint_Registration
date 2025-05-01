import mongoose from "mongoose";
import express from "express";
import { verifyToken } from "../Middlwares/authMiddleware.js";
import {
  registerPataint,
  getAllPataints,
} from "../Controllers/patiantController.js";

const pataintRouter = express.Router();

pataintRouter.post("/register", verifyToken, registerPataint);
pataintRouter.get("/getAll", verifyToken, getAllPataints);

export default pataintRouter;
