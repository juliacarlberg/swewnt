const express = require("express");
const router = express.Router();

const {
  createPlayer,
  getAllPlayers,
  //   getPlayerById,
  //   updatePlayerById,
  //   deletePlayerById,
} = require("../controllers/playerControllers");

router.post("/", createPlayer);
router.get("/", getAllPlayers);
// router.get("/:playerId", getPlayerById);
// router.put("/:playerId", updatePlayerById);
// router.delete("/:playerId", deletePlayerById);

module.exports = router;
