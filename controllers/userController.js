import User from "../model/userModel.js";
import fs from "fs";

export const addUser = async (req, res) => {
  try {
    const newUser = new User({
      ...req.body,
    });
    await newUser.save();
    res.status(201).send("User created");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const getUsers = await User.find();

    console.log(getUsers);
    res.status(201).send(getUsers);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const editUser = async (req, res) => {
  try {
    const findUser = await User.findById(req.body.id);
    console.log(findUser, "edituser");
    res.status(201).send(findUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.body.userId;
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    console.log(name);
    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      { name: name, email: email, phone: phone }
    );

    res.status(201).send(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const saveUser = async (req, res) => {
  try {
    const userId = req.body.userId;
    const findUser = await User.findById(userId);
    const jsonString = JSON.stringify(findUser);

    fs.appendFile("users.json", jsonString, (error) => {
      if (error) throw error;

      console.log("File saved");
    });
    console.log(findUser);
    res.status(201).send("User Saved");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
