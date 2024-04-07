import express from "express";
import { addUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/adduser", addUser);
router.get("/getusers", getUsers);

export default router;
