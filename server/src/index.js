const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "config", "config.env"),
});
const http = require("http");
const { app } = require("./app");
const initDb = require("./startup/db");

const server = http.createServer(app);

const PORT = process.env.PORT(async function startServer() {
  await initDb();

  server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
})();
