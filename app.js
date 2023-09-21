const express = require("express");
const cors = require("cors"); // Import the cors middleware
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // This allows cookies and authentication headers to be sent
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const adRoutes = require("./routes/adRoutes");
app.use(express.json()); // Add this line to parse JSON data

mongoose
  .connect(
    "mongodb+srv://supremebilal78:t5OxJKSK26h9q9YU@test-db.v6p1fbj.mongodb.net/Pakwheels",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(8080, function () {
      console.log("Server running on 8080");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/ad", adRoutes);
