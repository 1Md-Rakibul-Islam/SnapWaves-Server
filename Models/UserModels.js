// const { default: mongoose } = require("mongoose");
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  role: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // ensure the email field is unique
  },
  phone: {
    type: String,
  },
  profileImg: String,
  coverPhotoURL: String,
  education: String,
  warks: String,
  address: String,
  about: String,
  relationship: String,
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
}
);

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
