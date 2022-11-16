const Billing = require("./Billing");

function Source(apiResource) {
  attributes = apiResource.attributes;

  this.id = apiResource.id;
  this.type = attributes.type;
  this.amount = attributes.amount;
  this.currency = attributes.currency;
  this.description = attributes.description;
  this.livemode = attributes.livemode;
  this.status = attributes.status;
  this.redirect = attributes.redirect;
  this.billing =
    attributes.billing === null ? null : new Billing(attributes.billing);
  this.metadata = attributes.metadata;
  this.created_at = attributes.created_at;
  this.updated_at = attributes.updated_at;
}

module.exports = Source;
