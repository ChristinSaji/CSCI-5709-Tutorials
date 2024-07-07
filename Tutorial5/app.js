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

app.put("/update/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { email, firstName } = req.body;

    if (!email && !firstName) {
      return res.status(400).json({
        message: "Bad Request: Missing email or firstName",
        success: false,
      });
    }

    let user = users.find((user) => user.id === id);
    if (user) {
      user.email = email || user.email;
      user.firstName = firstName || user.firstName;
      res.status(200).json({
        message: "User updated",
        success: true,
      });
    } else {
      res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
});

app.post("/add", (req, res) => {
  try {
    const { email, firstName } = req.body;

    if (!email || !firstName) {
      return res.status(400).json({
        message: "Bad Request: Missing email or firstName",
        success: false,
      });
    }

    const id = (Math.random() * 1000000).toFixed(0);
    const newUser = { email, firstName, id };
    users.push(newUser);

    res.status(201).json({
      message: "User added",
      success: true,
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
