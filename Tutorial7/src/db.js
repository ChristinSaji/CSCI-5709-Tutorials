const { MongoClient } = require("mongodb");
const atlas_connection_string =
  "mongodb+srv://christinsaji:root@tutorial7cluster.phh4lrz.mongodb.net/?retryWrites=true&w=majority&appName=tutorial7cluster";

let mongoClient;

async function databaseConnection() {
  try {
    mongoClient = await MongoClient.connect(atlas_connection_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return mongoClient.db("tutorial7");
  } catch (err) {
    console.error("Error connecting to MongoDB instance", err.message);
    throw err;
  }
}

function getDatabase() {
  if (!mongoClient) {
    console.log("Database is not connected");
  }
  return mongoClient.db("tutorial7");
}

module.exports = { databaseConnection, getDatabase };
