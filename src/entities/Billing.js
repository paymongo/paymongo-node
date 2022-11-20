const BillingAddress = require("./BillingAddress");

function Billing(data) {
  this.address = new BillingAddress(data.address);
  this.email = data.email;
  this.name = data.name;
  this.phone = data.phone;
}

module.exports = Billing;
