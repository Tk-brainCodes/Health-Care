class UnauthorizedError extends Error {
  statusCode = 401;
  constructor() {
    super("Internal server error");
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: "Unauthorized",
      },
    ];
  }
}

module.exports = {
  UnauthorizedError,
};
