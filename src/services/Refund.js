const BaseService = require("./Base");
const Refund = require("../entities/Refund");
const Listing = require('../entities/Listing');

function RefundService(client) {
  BaseService.call(this, client);

  this.uri = "/refunds";
}

RefundService.prototype.all = function(params) {
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

          data.push(new Refund(apiResponse));
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

RefundService.prototype.create = function(params) {
  return this.httpClient
    .request({
      url: this.uri,
      method: "post",
      params,
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Refund(response));
      });
    });
};

RefundService.prototype.retrieve = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id,
      method: "GET",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Refund(response));
      });
    });
};

Object.setPrototypeOf(RefundService.prototype, BaseService.prototype);

module.exports = RefundService;
