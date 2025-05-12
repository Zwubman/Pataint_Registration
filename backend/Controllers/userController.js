import mongoose from "mongoose";
import express from "express";
import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//register user
export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    });

    await user.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Unable to register the user", error);
    res.status(500).json({ error: "Cannot register" });
  }
};

// Normalize Gmail emails by removing dots from the local part
function normalizeEmail(email) {
  const [local, domain] = email.toLowerCase().split("@");
  if (domain === "gmail.com") {
    return local.replace(/\./g, "") + "@gmail.com";
  }
  return local + "@" + domain;
}

// This function handles user sign-in by verifying credentials and generating tokens
export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Normalize both entered email and stored email
    const normalizedEnteredEmail = normalizeEmail(email);
    const normalizedStoredEmail = normalizeEmail(user.email);

    // Compare the normalized emails
    if (normalizedEnteredEmail !== normalizedStoredEmail) {
      return res.status(401).json({ error: "Incorrect email or password." });
    }

    // Password check
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect password or email." });
    }

    // Generate access and refresh tokens
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

    // Set cookies for the tokens
    res.cookie("accessToken", accessToken, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    // Send response with tokens
    res.json({ message: "Login successful", accessToken, refreshToken });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Cannot log in" });
  }
};

// This function handles user sign-out by clearing the session token and cookies
export const signOut = async (req, res) => {
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
    console.error("Logout error:", error);
    return res.status(500).json({ error: "Cannot logout" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.isDeleted === true) {
      return res
        .status(404)
        .json({ error: "User not found or already deleted" });
    }

    user.isDeleted = true;
    user.deletedBy = userId;

    await user.save();

    return res
      .status(200)
      .json({ message: "User marked as deleted successfully" });
  } catch (error) {
    console.error("Unable to delete the user:", error);
    return res.status(500).json({ error: "Unable to delete the user" });
  }
};

//Change password
export const changePassword = async (req, res) => {
  const email = req.user.email;
  const { currentPassword, newPassword, confirmNewPassword } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Current password is incorrect" });
    }

    const isSamePassword = await bcrypt.compare(newPassword, user.password);
    if (isSamePassword) {
      return res.status(400).json({
        error: "New password cannot be the same as the current password",
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res
        .status(400)
        .json({ error: "New password and confirm password do not match" });
    }

    // const hashedPassword = await bcrypt.hash(newPassword, 10);
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    return res.status(500).json({ error: "Unable to change password" });
  }
};

//Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(
      {
        isDeleted: false,
        email: { $ne: req.user.email },
      },
      "email role"
    );

    res.json(users);
  } catch (error) {
    console.error("Users cannot be retrieved:", error);
    return res.status(500).json({ error: "Unable to retrieve users" });
  }
};

// Add Phone number
export const addPhone = async (req, res) => {
  try {
    const { phone } = req.body;
    const userId = req.user.id;

    const user = await User.findOne(userId);
    if (!user) {
      res.status(404).json({ message: "User not found." });
    }

    user.phone = phone;
    await user.save();

    res
      .status(200)
      .json({ message: "User successfully bind phone number to the account." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add phone number.", error });
  }
};

// Update email
export const updateEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const userId = req.user.id;

    // const user = await User.findOne(userId);
    // if(!user){
    //   res.status(404).json({message: "User not found."})
    // }

    const updatedEmail = await User.findOneAndUpdate(
      {
        userId,
      },
      {
        $set: {
          email,
        },
      },
      {
        new: true,
      }
    );

    if (!updatedEmail) {
      res.status(404).json({ message: "Email not updated or user not found." });
    }

    res.status(200).json({ message: "Email successfully updated." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to update email." });
  }
};
