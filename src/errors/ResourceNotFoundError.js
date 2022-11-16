const BaseError = require("./Base");

function ResourceNotFoundError(data) {
  BaseError.call(this, data);
}

Object.setPrototypeOf(ResourceNotFoundError.prototype, BaseError.prototype);

module.exports = ResourceNotFoundError;
