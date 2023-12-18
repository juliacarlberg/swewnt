require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const playerRoutes = require("./src/routes/playerRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.use(
  cors({
    methods: ["GET", "PUT", "POST", "DELETE", "OPTION"],
  })
);

const port = process.env.PORT || 5002;

app.use((req, res, next) => {
  console.log(`Processing ${req.method} request to ${req.path}`);
  console.log("Request headers:", req.headers);
  console.log("Request body:", req.body);
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
    console.log("MongoDB connected successfully!");

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

run();
