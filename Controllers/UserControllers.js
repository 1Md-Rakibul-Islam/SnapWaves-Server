import UserModel from "../Models/UserModels.js";

// creating a User
export const createUser = async (req, res) => {
  const newUser = new UserModel(req.body);
  // console.log('Users', newUser);

  try {
    const savedUser = await newUser.save(); // Inserting the new user into the database
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
// creating a User

export const updateUser = async (req, res) => {
  const userId = req.params.id;
  // console.log(userId);

  const { name, email } = req.body;
  // console.log('Update User', name);

  try {
    const result = await UserModel.findByIdAndUpdate(
      userId,
      { $set: { name, email } },
      { new: true }
    );

    if (result.nModified === 0) {
      res.status(404).json({ message: "Document not found" });
    } else {
      res.status(200).json({ message: "Document updated successfully" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// extract the updated user data from the request body

export const deleteUser = async (req, res) => {
  const userEmail = req.query.email;
  // console.log(userEmail);

  try {
    const user = await UserModel.deleteOne({ email: userEmail });
    if (user) {
      res.status(200).json({
        result: user,
        message: "Success",
      });
    } else {
      res.status(404).json("No such User");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  const userEmail = req.query.email;
  // console.log(userEmail);

  try {
    const user = await UserModel.findOne({ email: userEmail });
    if (user) {
      res.status(200).json({
        result: user,
        message: "Success",
      });
    } else {
      res.status(404).json("No such User");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await UserModel.findById(userId);
    if (user) {
      res.status(200).json({
        result: user,
        message: "Success",
      });
    } else {
      res.status(404).json("No such User");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
