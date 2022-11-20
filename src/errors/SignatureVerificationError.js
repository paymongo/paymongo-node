function SignatureVerificationError(message) {
  this.type = "SignatureVerificationError";
  this.message = message;
}

module.exports = SignatureVerificationError;
