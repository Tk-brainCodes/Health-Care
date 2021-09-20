const { validationResult } = require("express-validator");
const { createNewUser } = require("../models/user/user.model");
const { RequestValidationError } = require("../errors/RequestValidationError");

const httpSignUpController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
  const { firstName, lastName, email, password } = req.body;
  try {
    const newUser = await createNewUser(firstName, lastName, email, password);
    req.login(newUser, (err) => {
      // console.log({ loginerr: err });
      if (err) {
        return res.status(500).json({
          errors: [{ message: "Something went wrong" }],
        });
      }
      return res.status(201).json({ user: newUser });
    });
  } catch (err) {
    if (err.message.includes("duplicate key error")) {
      return res.status(400).json({
        errors: [{ message: "email already exists", field: "email" }],
      });
    }
    throw err;
  }
};

const httpSigninController = (req, res) => {
  return res.status(200).json({
    user: req.user,
  });
};

const httpSignoutController = (req, res) => {
  req.logout();
  return res.status(200).json({
    message: "user signed out succesfully",
  });
};

module.exports = {
  httpSignUpController,
  httpSigninController,
  httpSignoutController,
};
