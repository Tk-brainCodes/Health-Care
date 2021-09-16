class Unauthorized extends Error {
  statusCode = 401;
  constructor() {
    super("Internal server error");
    Object.setPrototypeOf(this, Unauthorized.prototype);
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
  Unauthorized,
};
