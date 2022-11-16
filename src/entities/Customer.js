function Customer(apiResource) {
  attributes = apiResource.attributes;

  this.id = apiResource.id;
  this.default_device = attributes.default_device;
  this.default_payment_method_id = attributes.default_payment_method_id;
  this.email = attributes.email;
  this.first_name = attributes.first_name;
  this.last_name = attributes.last_name;
  this.livemode = attributes.livemode;
  this.organization_id = attributes.organization_id;
  this.phone = attributes.phone;
  this.created_at = attributes.created_at;
  this.updated_at = attributes.updated_at;
}

module.exports = Customer;
