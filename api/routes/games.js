import express from "express";
import {
  creatGame,
  getGameDetailById,
  saveFlips,
} from "../controller/gameController.js";
const router = express.Router();

router.get("/create-game", creatGame);
router.get("/get-game-details-by-id/:id", getGameDetailById);
router.post("/save-flips/:id", saveFlips);

export default router;
