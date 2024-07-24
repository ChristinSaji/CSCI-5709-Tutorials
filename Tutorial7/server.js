const http = require("http");
const { startServer } = require("./src/app");
const { databaseConnection } = require("./src/db");

const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer();

// Connect to the database
databaseConnection()
  .then((db) => {
    startServer(server, db);
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error starting server: ", err);
    process.exit(1);
  });
