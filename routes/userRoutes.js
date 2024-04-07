import express from "express";
import {
  addUser,
  editUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/adduser", addUser);
router.get("/getusers", getUsers);
router.put("/edituser", editUser);
router.put("/updateUser", updateUser);

export default router;
