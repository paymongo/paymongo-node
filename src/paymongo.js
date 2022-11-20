"use strict";

const services = require("./services");

function Paymongo(apiKey) {
  if (!(this instanceof Paymongo)) {
    return new Paymongo(apiKey);
  }

  this.apiKey = apiKey;
  this.baseUrl = "https://api.paymongo.com";
  this.apiVersion = "v1";

  // TODO: Move this to a factory.
  for (let service in services) {
    this[service] = new services[service](this);
  }
}

module.exports = Paymongo;
