const passport = require("passport");
const { ServerError } = require("../errors/ServerError");

const customAuthenticate = () => {
  return (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        throw new ServerError();
      }
      if (!user) {
        //check info then respond accordingly if
        return res.status(401).json({ message: "Invalid login details" });
      }

      req.logIn(user, function (err) {
        if (err) {
          throw new ServerError();
        }
        //if no userType is  supplied all signedin users  are authorized
        return next();
      });
    })(req, res, next);
  };
};

module.exports = {
  customAuthenticate,
};
