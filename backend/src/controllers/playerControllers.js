const Player = require("../models/Player");

exports.getAllPlayers = async (req, res) => {
  console.log("handling request");
  try {
    const allPlayers = await Player.find();
    return res.json({ data: allPlayers });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ message: "Internal Server Error" });
  }
};

exports.createPlayer = async (req, res) => {
  console.log("handling request");
  try {
    const {
      firstname,
      lastname,
      dateofbirth,
      birthplace,
      height,
      playernumber,
      position,
      club,
    } = req.body;

    const newPlayer = await Player.create({
      firstname,
      lastname,
      dateofbirth,
      birthplace,
      height,
      playernumber,
      position,
      club,
    });

    res.json({ message: "Player created successfully" });
  } catch (error) {
    // Check if the error is a validation error
    if (error.name === "ValidationError") {
      // Send a 400 Bad Request response with details of validation errors
      return res.status(400).json({ errors: error.errors });
    }

    // Handle other types of errors
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getPlayerById = async (req, res) => {
  try {
    const playerId = req.params.playerId;

    const player = await Player.findById(playerId);

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    return res.json(player);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
