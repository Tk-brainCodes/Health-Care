const { ServerError } = require("./ServerError");

class RequestValidationError extends ServerError {
  statusCode = 400;
  errorsArr = [];
  constructor(errors) {
    super("Invalid request parameters");
    Object.setPrototypeOf(this, RequestValidationError.prototype);
    this.errorsArr = errors;
  }

  serializeErrors() {
    return this.errorsArr.map((err) => {
      return {
        message: err.msg,
        field: err.param,
        isUndefined: err.value === undefined,
      };
    });
  }
}

module.exports = {
  RequestValidationError,
};
