function PaymentMethod() {
  attributes = apiResource.attributes;

  this.id = apiResource.id;
  this.type = attributes.type;
  this.billing =
    attributes.billing === null ? null : new Billing(attributes.billing);
  this.details = attributes.details;
  this.metadata = attributes.metadata;
  this.created_at = attributes.created_at;
  this.updated_at = attributes.updated_at;
}

module.exports = PaymentMethod;
