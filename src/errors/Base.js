const Error = require("../Error");

function BaseError(data) {
  this._errors = data.errors;
  this.type = this.constructor.name;
  this.errors = [];

  for (let errorCtr = 0; errorCtr < this._errors.length; errorCtr++) {
    this.errors.push(new Error(this._errors[errorCtr]));
  }
}

module.exports = BaseError;
