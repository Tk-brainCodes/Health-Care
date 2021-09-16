const httpSignUpController = (req, res) => {};

const httpSigninController = (req, res) => {};

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
