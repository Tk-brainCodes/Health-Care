const { app } = require("../app");

const path = require("path");

const { authRouter } = require("./auth/auth.route");

module.exports = () => {
  app.use("/api/v1/auth", authRouter);

  //server the built react app from the public folder
  app.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  });

  app.use(errorHandler);
};
