function PaymentIntent(apiResource) {
  attributes = apiResource.attributes;

  this.id = apiResource.id;
  this.amount = attributes.amount;
  this.capture_type = attributes.capture_type;
  this.client_key = attributes.client_key;
  this.currency = attributes.currency;
  this.description = attributes.description;
  this.last_payment_error = attributes.last_payment_error;
  this.livemode = attributes.livemode;
  this.statement_descriptor = attributes.statement_descriptor;
  this.status = attributes.status;
  this.payment_method_allowed = attributes.payment_method_allowed;
  this.payments = [];

  if (attributes.payments !== null) {
    const paymentsLength = attributes.payments.length;

    for (let paymentCtr = 0; paymentCtr < paymentsLength; paymentCtr++) {
      this.payments.push(new Payment(attributes.payments[paymentCtr]));
    }
  }

  this.next_action = attributes.next_action;
  this.payment_method_options = attributes.payment_method_options;
  this.metadata = attributes.metadata;
  this.setup_future_usage = attributes.setup_future_usage;
  this.created_at = attributes.created_at;
  this.updated_at = attributes.updated_at;
}

module.exports = PaymentIntent;
