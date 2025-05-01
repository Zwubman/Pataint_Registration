import dotenv from "dotenv";
import express from "express";
import "./Connections/Conn.js";
import Pataint from "./Models/pataintModel.js";
import User from "./Models/userModel.js";
import pataintRoute from "./Routes/pataintRoute.js";
import userRoute from "./Routes/userRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use('/user', userRoute);
app.use('/pataint', pataintRoute);


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`The server started on port ${port}`);
});
