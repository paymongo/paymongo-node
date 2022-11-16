const BaseError = require("./Base");

function AuthenticationError(data) {
  BaseError.call(this, data);
}

Object.setPrototypeOf(AuthenticationError.prototype, BaseError.prototype);

module.exports = AuthenticationError;
