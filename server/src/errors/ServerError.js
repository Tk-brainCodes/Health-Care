class ServerError extends Error {
  statusCode = 500;
  constructor() {
    super("Internal server error");
    Object.setPrototypeOf(this, ServerError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: "Internal server error",
      },
    ];
  }
}

module.exports = {
  ServerError,
};
