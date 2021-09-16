const userModel = require("./user.mongo");

const createNewUser = async (firstName, lastName, email, password) => {
  await userModel.create({
    firstName,
    lastName,
    email,
    passwordHash: password,
    role: "USER",
  });
};

module.exports = {
  createNewUser,
};
