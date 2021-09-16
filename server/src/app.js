const express = require("express");
const passport = require("passport");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const passportAuth = require("./passport/passportAuth");
passportAuth.initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/router.main")(app);

module.exports = { app };
