const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user/user.mongo");
const bcrypt = require("bcryptjs");

const initializePassport = (passport) => {
  // Passport needs to be able to serialize and deserialize users to support persistent login sessions
  passport.serializeUser(function (user, done) {
    //logger.debug('serializing user', {meta: user});
    done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  // Configure the local strategy for use by Passport.

  passport.use(
    "local",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async function (email, password, done) {
        // async (email, password, done) => {
        try {
          const user = await User.findOne({ email });

          if (!user) {
            return done({ message: "Invalid credentials" }, false);
          }

          const validate = bcrypt.compareSync(password, user.passwordHash);

          if (!validate) {
            return done({ message: "Invalid credentials" }, false);
          }

          // User and password both match, return user from done method
          // which will be treated like success
          return done(null, user, { message: "Logged in Successfully" });
        } catch (err) {
          console.error(err);
          return done(err);
        }
        // };
      }
    )
  );
};

module.exports = {
  initializePassport,
};
