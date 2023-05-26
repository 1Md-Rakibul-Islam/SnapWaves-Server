import mongoose from "mongoose";

const ChatSchema = mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const ChatModal = mongoose.model("chat", ChatSchema)
export default ChatModal;
