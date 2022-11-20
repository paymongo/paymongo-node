function PaymentSource(data) {
  this.id = data.id;
  this.type = data.type;

  if (data.hasOwnProperty("brand")) {
    this.brand = data.brand;
  }

  if (data.hasOwnProperty("country")) {
    this.country = data.country;
  }

  if (data.hasOwnProperty("last4")) {
    this.last4 = data.last4;
  }
}

module.exports = PaymentSource;
