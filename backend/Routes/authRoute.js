import mongoose from "mongoose";
import express from "express";
import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();









//Sign In
router.post("/sign-in", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return
        res.status(404).json({ error: "user not found" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      const accessToken = jwt.sign(
        {
          id: user._id,
          email: user.email,
          role: user.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10h" }
      );
  
      const refreshToken = jwt.sign(
        { email: user.email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "30d" }
      );
  
      res.cookie("accessToken", accessToken, { httpOnly: true });
      res.cookie("refreshToken", refreshToken, { httpOnly: true });
  
      res.json({ message: "Login successful", accessToken, refreshToken });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Cannot log in" });
    }
  });



  // Sign Out
router.post('/sign-out', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email });

        if (user) {
            user.sessionToken = null;
            await user.save();
        }

        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        return res.json({ message: "Logout successful" });
    } catch (error) {
        console.error('Logout error:', error);
        return res.status(500).json({ error: 'Cannot logout' });
    }
});


  export default router;