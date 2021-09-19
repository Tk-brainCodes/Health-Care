const express = require("express");
const { body } = require("express-validator");
const {
  httpSigninController,
  httpSignUpController,
  httpSignoutController,
} = require("../../controllers/auth.controllers");
const { customAuthenticate } = require("../../middleware/customauthenticate");

//base -  /api/v1/auth  at 16/09/2021
const router = express.Router();

router.post(
  "/signin",
  [
    body("email").isEmail().withMessage("email must be valid"),
    body("password")
      .isString()
      .trim()
      .isLength({ min: 4 })
      .withMessage("password must be at least 4 characters"),
  ],
  customAuthenticate,
  httpSigninController
);
router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("email must be valid"),
    body("password")
      .isString()
      .trim()
      .isLength({ min: 4 })
      .withMessage("password must be at least 4 characters"),
    body("firstName")
      .isString()
      .trim()
      .isLength({ min: 2 })
      .withMessage("firstName must be at least 2 characters"),
    body("lastName")
      .isString()
      .trim()
      .isLength({ min: 2 })
      .withMessage("lastName must be at least 2 characters"),
  ],
  httpSignUpController
);
router.post("/signout", httpSignoutController);

module.exports = {
  authRouter: router,
};
