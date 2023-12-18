const Player = require("../models/Player");

exports.getAllPlayers = async (req, res) => {
  try {
    const allPlayers = await Player.find();
    return res.json({ data: allPlayers });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ message: "Internal Server Error" });
  }
};

exports.createPlayer = async (req, res) => {
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

    return res
      .setHeader(
        "Location",
        `http://localhost:${process.env.PORT}/api/v1/players`
      )
      .status(201)
      .json(newPlayer);
  } catch (error) {
    console.log(error);

    return res.sendStatus(500).json({ message: "Internal server error" });
  }
};
