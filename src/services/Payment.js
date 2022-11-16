const BaseService = require("./Base");
const Payment = require("../entities/Payment");
const Listing = require("../entities/Listing");
const ApiResource = require("../ApiResource");

function PaymentService(client) {
  BaseService.call(this, client);

  this.uri = "/payments";
}

PaymentService.prototype.all = function(params) {
  return this.httpClient
    .request({
      url: this.uri,
      method: "GET",
      params,
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        const data = [];

        for (let rowCtr = 0; rowCtr < response.data.length; rowCtr++) {
          const apiResponse = new ApiResource(response.data[rowCtr]);

          data.push(new Payment(apiResponse));
        }

        resolve(
          new Listing({
            has_more: response.has_more,
            data: data,
          })
        );
      });
    });
};

PaymentService.prototype.create = function(params) {
  return this.httpClient
    .request({
      url: this.uri,
      method: "post",
      params,
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Payment(response));
      });
    });
};

PaymentService.prototype.retrieve = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id,
      method: "GET",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Payment(response));
      });
    });
};

Object.setPrototypeOf(PaymentService.prototype, BaseService.prototype);

module.exports = PaymentService;
