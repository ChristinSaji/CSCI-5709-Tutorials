const express = require("express");
const app = express();
app.use(express.json());

let users = [
  { email: "abc@abc.ca", firstName: "ABC", id: "5abf6783" },
  { email: "xyz@xyz.ca", firstName: "XYZ", id: "5abf674563" },
];

app.get("/users", (req, res) => {
  try {
    res.status(200).json({
      message: "Users retrieved",
      success: true,
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
});

app.use((req, res, next) => {
  res.status(200).json({
    message: "It Works!",
  });
});

module.exports = app;
