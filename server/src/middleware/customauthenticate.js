const passport = require("passport");
const { promisify } = require("util");

const { validationResult } = require("express-validator");

const { RequestValidationError } = require("../errors/RequestValidationError");

const customAuthenticate = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      // console.error(err);
      if (err.message === "Invalid credentials") {
        return res.status(400).json({
          errors: [{ message: "Invalid credentials" }],
        });
      }
      return res.status(500).json({
        errors: [{ message: "Something went wrong" }],
      });
    }
    if (!user) {
      //check info then respond accordingly if
      return res.status(400).json({
        errors: [{ message: "Invalid credentials" }],
      });
    }

    req.logIn(user, function (err) {
      if (err) {
        return res.status(500).json({
          errors: [{ message: "Something went wrong" }],
        });
      }
      return next();
    });
  })(req, res, next);
};

module.exports = {
  customAuthenticate,
};
