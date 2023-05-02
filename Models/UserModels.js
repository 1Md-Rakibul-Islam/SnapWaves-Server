// const { default: mongoose } = require("mongoose");
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
  role: {
    type: String,
  },
  photoURL: String,
  coverPhotoURL: String,
  about: String,
  livesIn: String,
  worksAt: String,
  relationship: String,
  country: String,
  followers: [],
  following: [],
}
);

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
