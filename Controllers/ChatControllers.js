import ChatModal from "../Models/ChatModel.js";


export const createChat = async (req, res) => {
  const newChat = new ChatModal({
    members: [req.body.senderId, req.body.recevierId],
  });

  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const userChats = async (req, res) => {
  try {
    const chat = await ChatModal.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findChat = async (req, res) => {
    try {
        const chat = await ChatModal.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]}
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(500).json(error)
    }
}
