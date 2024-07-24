const express = require("express");
const { ObjectId } = require("mongodb");
const collectionName = "users";

function startServer(server, db) {
  const app = express();
  app.use(express.json());

  // GET API to fetch all users
  app.get("/users", async (req, res) => {
    try {
      const users = await db.collection(collectionName).find().toArray();
      res.status(200).json({ success: true, users });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  });

  // GET API to fetch a user by ID
  app.get("/user/:id", async (req, res) => {
    try {
      const user = await db
        .collection(collectionName)
        .findOne({ _id: new ObjectId(req.params.id) });
      if (user) {
        res.status(200).json({ success: true, user });
      } else {
        res.status(404).json({ success: false, message: "User not found" });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  });

  // POST API to add users
  app.post("/add", async (req, res) => {
    try {
      const newUser = await db.collection(collectionName).insertOne(req.body);
      res.status(201).json({
        success: true,
        message: "User added successfully",
        id: newUser.insertedId,
      });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  });

  // PUT API to update the user
  app.put("/update/:id", async (req, res) => {
    try {
      const user = await db
        .collection(collectionName)
        .findOne({ _id: new ObjectId(req.params.id) });

      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      await db
        .collection(collectionName)
        .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
      res.status(200).json({ success: true, message: "User is updated" });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  });

  // DELETE API to delete the user
  app.delete("/delete/:id", async (req, res) => {
    try {
      const user = await db
        .collection(collectionName)
        .findOne({ _id: new ObjectId(req.params.id) });

      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      await db
        .collection(collectionName)
        .deleteOne({ _id: new ObjectId(req.params.id) });
      res.status(200).json({ success: true, message: "User deleted" });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  });

  server.on("request", app);
}

module.exports = { startServer };
