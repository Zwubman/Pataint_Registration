import mongoose from "mongoose";
import express from "express";
import { verifyToken } from "../Middlwares/authMiddleware.js";
import {
  registerPataint,
  getAllPataints,
  downloadPatientsExcel,
} from "../Controllers/patiantController.js";

const pataintRouter = express.Router();

pataintRouter.post("/register", verifyToken, registerPataint);
pataintRouter.get("/getAll", verifyToken, getAllPataints);
pataintRouter.get("/download", verifyToken, downloadPatientsExcel);

export default pataintRouter;
