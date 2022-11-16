const BaseService = require("./Base");
const Customer = require("../entities/Customer");

function CustomerService(client) {
  BaseService.call(this, client);

  this.uri = "/customers";
}

CustomerService.prototype.retrieve = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id,
      method: "GET",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Customer(response));
      });
    });
};

CustomerService.prototype.create = function(params) {
  return this.httpClient
    .request({
      url: this.uri,
      method: "post",
      params,
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Customer(response));
      });
    });
};

CustomerService.prototype.update = function(id, params) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id,
      method: "put",
      params,
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Customer(response));
      });
    });
};

CustomerService.prototype.delete = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id,
      method: "delete",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Customer(response));
      });
    });
};

Object.setPrototypeOf(CustomerService.prototype, BaseService.prototype);

module.exports = CustomerService;
