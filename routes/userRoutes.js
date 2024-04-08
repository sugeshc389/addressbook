import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getUsers,
  updateUser,
  saveUser
} from "../controllers/userController.js";

const router = express.Router();

router.post("/adduser", addUser);
router.get("/getusers", getUsers);
router.put("/edituser", editUser);
router.put("/updateUser", updateUser);
router.delete("/deleteUser/:id", deleteUser);
router.post("/saveUser",saveUser);

export default router;
