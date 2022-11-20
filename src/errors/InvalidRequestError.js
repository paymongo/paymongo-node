const BaseError = require("./Base");

function InvalidRequestError(data) {
  BaseError.call(this, data);
}

Object.setPrototypeOf(InvalidRequestError.prototype, BaseError.prototype);

module.exports = InvalidRequestError;
