const BaseService = require("./Base");
const Source = require("../entities/Source");

function SourceService(client) {
  BaseService.call(this, client);

  this.uri = "/sources";
}

SourceService.prototype.create = function(params) {
  return this.httpClient
    .request({
      url: this.uri,
      method: "post",
      params,
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Source(response));
      });
    });
};

SourceService.prototype.retrieve = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id,
      method: "GET",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Source(response));
      });
    });
};

Object.setPrototypeOf(SourceService.prototype, BaseService.prototype);

module.exports = SourceService;
