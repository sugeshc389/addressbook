import User from "../model/userModel.js";

export const addUser = async (req, res) => {
  try {
    const newUser = new User({
      ...req.body,
    });
    await newUser.save();
    res.status(201).send('User created');
  } catch (error) {
    console.log(error);
  }
};
