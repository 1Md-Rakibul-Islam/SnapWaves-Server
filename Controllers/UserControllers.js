import UserModel from "../Models/UserModels.js";

export const getUser = async (req, res) => {
    const userEmail = req.query.email;
    console.log("H0", userEmail);
  
    try {

      const user = await UserModel.find({});
      if (user) {
        res.status(200).json({
          result: user,
          message: "Success"
        });
      } else {
        res.status(404).json("No such User");
      }
    } catch (error) {
      res.status(500).json(error);
    }
};