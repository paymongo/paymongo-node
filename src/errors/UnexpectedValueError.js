function UnexpectedValueError(message) {
  this.type = "UnexpectedValueError";
  this.message = message;
}

module.exports = UnexpectedValueError;
