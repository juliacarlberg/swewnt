require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const playerRoutes = require("./src/routes/playerRoutes");

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5002;

app.use((req, res, next) => {
  console.log(`Processing ${req.method} request to ${req.path}`);
  next();
});

app.use("/helloworld", (req, res) => {
  return res.send("Hello world");
});

app.use("/api/v1/players", playerRoutes);

const run = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB);

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
