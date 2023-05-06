import express from "express";
import { getAllUsers, getUserById } from "../controller/userController.js";
const router = express.Router();

router.get("/get-all-users", getAllUsers);
router.get("/getUserById/:user_id", getUserById);

export default router;
