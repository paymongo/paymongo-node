const Billing = require("./Billing");
const PaymentSource = require("./PaymentSource");

function Payment(apiResource) {
  attributes = apiResource.attributes;

  this.id = apiResource.id;
  this.amount = attributes.amount;
  this.billing =
    attributes.billing === null ? null : new Billing(attributes.billing);
  this.currency = attributes.currency;
  this.description = attributes.description;
  this.fee = attributes.fee;
  this.livemode = attributes.livemode;
  this.net_amount = attributes.net_amount;
  this.statement_descriptor = attributes.statement_descriptor;
  this.status = attributes.status;
  this.metadata = attributes.metadata;
  this.source = new PaymentSource(attributes.source);
  // TODO payout
  this.tax_amount = attributes.tax_amount;
  this.payment_intent_id = attributes.payment_intent_id;
  this.paid_at = attributes.paid_at;
  this.available_at = attributes.available_at;
  this.created_at = attributes.created_at;
  this.updated_at = attributes.updated_at;
  // TODO refunds
  // TODO taxes
}

module.exports = Payment;
