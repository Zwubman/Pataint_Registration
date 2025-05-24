import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    allowNull: false,
  },
  email: {
    type: String,
    unique: true,
    allowNull: false,
  },
  password: {
    type: String,
    allowNull: false,
    unique: false,
  },
  phone: {
    type: String
  },
  role: {
    type: String,
    emum: ["Admin", "SuperAdmin"],
    default: "Admin",
    allowNull: false,
  },
  sessionToken: {
    type: String,
    allowNull: true,
    default: null,
  },
  deletedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  registerdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", UsersSchema);
export default User;
