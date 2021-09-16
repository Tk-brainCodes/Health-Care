const express = require("express");
const { body } = require("express-validator");
const {
  httpSigninController,
  httpSignUpController,
  httpSignoutController,
} = require("../../controllers/auth.controllers");

//base -  /api/v1/auth  at 16/09/2021
const router = express.Router();

router.post(
  "/signin",
  [
    body("email").isEmail(),
    body("password").isString().trim().isLength({ min: 4 }),
  ],
  httpSigninController
);
router.post(
  "/signup",
  [
    body("email").isEmail(),
    body("password").isString().trim().isLength({ min: 4 }),
    body("firstName").isString().trim().isLength({ min: 2 }),
    body("lastName").isString().trim().isLength({ min: 2 }),
  ],
  httpSignUpController
);
router.post("/signout", httpSignoutController);

module.exports = {
  authRouter: router,
};
