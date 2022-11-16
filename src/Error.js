const SourceError = require("./SourceError");

function PaymongoError(error) {
  this._error = error;

  this.code = error.code !== undefined ? error.code : null;
  this.detail = error.detail;
  this.source = null;

  if (error.source !== undefined) {
    this.source = new SourceError(error.source);
  }
}

module.exports = PaymongoError;
