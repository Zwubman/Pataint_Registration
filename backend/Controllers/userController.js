import mongoose from "mongoose";
import express from "express";
import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";

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

//Delete user by email
export const deleteUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.isDeleted === true) {
      return res.status(404).json({ error: "User not found" });
    }

    user.deletedBy = userId;
    user.isDeleted = true;
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
      return res
        .status(400)
        .json({
          error: "New password cannot be the same as the current password",
        });
    }

    if (newPassword !== confirmNewPassword) {
      return res
        .status(400)
        .json({ error: "New password and confirm password do not match" });
    }

    // const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = newPassword;
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
      },
      "email role"
    );

    res.json(users);
  } catch (error) {
    console.error("Users cannot be retrieved:", error);
    return res.status(500).json({ error: "Unable to retrieve users" });
  }
};
