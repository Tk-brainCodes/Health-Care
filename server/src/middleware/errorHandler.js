const { ServerError } = require("../errors/ServerError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof ServerError) {
    return res.status(err.statusCode).json({
      errors: err.serializeErrors(),
    });
  }

  return res.status(500).json({
    errors: [{ message: "Something went wrong" }],
  });
};

module.exports = {
  errorHandler,
};
