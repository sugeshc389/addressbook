import User from "../model/userModel.js";

export const addUser = async (req, res) => {
  try {
    const newUser = new User({
      ...req.body,
    });
    await newUser.save();
    res.status(201).send("User created");
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const getUsers = await User.find();

    console.log(getUsers);
    res.status(201).send(getUsers);
  } catch (error) {
    console.log(error);
  }
};
