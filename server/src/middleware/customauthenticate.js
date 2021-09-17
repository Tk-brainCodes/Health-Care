const passport = require("passport");
const { ServerError } = require("../errors/ServerError");
const { UnauthorizedError } = require("../errors/UnauthorizedError");

const customAuthenticate = () => {
  return (req, res, next) => {
    passport.authenticate("local", function (err, user, info) {
      if (err) {
        throw new ServerError();
      }
      if (!user) {
        //check info then respond accordingly if
        throw new UnauthorizedError();
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
