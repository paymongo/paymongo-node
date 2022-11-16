function Link(apiResource) {
  attributes = apiResource.attributes;

  this.id = apiResource.id;
  this.amount = attributes.amount;
  this.archived = attributes.archived;
  this.currency = attributes.currency;
  this.description = attributes.description;
  this.livemode = attributes.livemode;
  this.fee = attributes.fee;
  this.remarks = attributes.remarks;
  this.status = attributes.status;
  this.tax_amount = attributes.tax_amount;
  this.checkout_url = attributes.checkout_url;
  this.reference_number = attributes.reference_number;
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
  this.taxes = attributes.taxes;
  // Links API does not support metadata yet. Revisit this in the future for metadata support.
  // this.metadata = attributes.metadata;
  this.created_at = attributes.created_at;
  this.updated_at = attributes.updated_at;
}

module.exports = Link;
