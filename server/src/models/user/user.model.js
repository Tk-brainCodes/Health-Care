const userModel = require("./user.mongo");

const createNewUser = async (firstName, lastName, email, password) => {
  const newUser = userModel({
    firstName,
    lastName,
    email,
    passwordHash: password,
    role: "USER",
  });
  await newUser.save();
  return newUser;
};

module.exports = {
  createNewUser,
};
