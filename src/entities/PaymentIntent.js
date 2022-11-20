function PaymentIntent(apiResource) {
  attributes = apiResource.attributes;

  this.id = apiResource.id;
  this.amount = attributes.amount;
  this.capture_type = attributes.capture_type;
  this.client_key = attributes.client_key;
  this.currency = attributes.currency;
  this.description = attributes.description;
  this.livemode = attributes.livemode;
  this.statement_descriptor = attributes.statement_descriptor;
  this.status = attributes.status;
  // TODO: populate last_payment_error
  this.payment_method_allowed = attributes.payment_method_allowed;
  this.payments = null;

  if (attributes.payments !== null) {
    this.payments = [];

    for (
      let paymentCtr = 0;
      paymentCtr < attributes.payments.length;
      paymentCtr++
    ) {
      this.payments.push(new Payment(attributes.payments[paymentCtr]));
    }
  }
  // TODO: populate next_action
  this.payment_method_options = attributes.payment_method_options;
  this.metadata = attributes.metadata;
  // TODO: populate setup_future_usage
  this.created_at = attributes.created_at;
  this.updated_at = attributes.updated_at;
}

module.exports = PaymentIntent;
