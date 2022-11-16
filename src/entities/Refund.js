function Refund(apiResource) {
  attributes = apiResource.attributes;

  this.id = apiResource.id;
  this.amount = attributes.amount;
  this.balance_transaction_id = attributes.balance_transaction_id;
  this.livemode = attributes.livemode;
  this.payment_id = attributes.payment_id;
  this.payout_id = attributes.payout_id;
  this.reason = attributes.reason;
  this.status = attributes.status;
  this.currency = attributes.currency;
  this.metadata = attributes.metadata;
  this.notes = attributes.notes;
  this.available_at = attributes.available_at;
  this.refunded_at = attributes.refunded_at;
  this.created_at = attributes.created_at;
  this.updated_at = attributes.updated_at;
}

module.exports = Refund;
