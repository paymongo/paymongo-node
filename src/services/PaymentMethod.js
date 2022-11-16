const BaseService = require("./Base");
const PaymentMethod = require("../entities/PaymentMethod");

function PaymentMethodService(client) {
  BaseService.call(this, client);

  this.uri = "/payment_methods";
}

PaymentMethodService.prototype.retrieve = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id,
      method: "GET",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new PaymentMethod(response));
      });
    });
};

Object.setPrototypeOf(PaymentMethodService.prototype, BaseService.prototype);

module.exports = PaymentMethodService;
