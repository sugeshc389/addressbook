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

export const editUser = async (req, res) => {
  try {
    const findUser = await User.findById(req.body.id);
    console.log(findUser, "edituser");
    res.status(201).send(findUser);
  } catch (error) {
    console.log(error);
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
    console.log(updatedUser, "This is updated user");
    res.status(201).send(updatedUser);
  } catch (error) {
    console.log(error);
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
