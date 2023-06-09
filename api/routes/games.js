import express from "express";
import {
  creatGame,
  getGameDetailById,
  saveFlips,
  checkGameOverById,
} from "../controller/gameController.js";
const router = express.Router();

// To create main game
router.get("/create-game", creatGame);

// Get the game details by using game uuid
router.get("/get-game-details-by-id/:id", getGameDetailById);

// Save or increment flip count for the game by game uuid
router.post("/save-flips/:id", saveFlips);

// Check game is over or not
router.get("/check-game-over/:uuid", checkGameOverById);

export default router;
