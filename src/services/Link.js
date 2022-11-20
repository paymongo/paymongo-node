const BaseService = require("./Base");
const Link = require("../entities/Link");
const Listing = require("../entities/Listing");
const ApiResource = require("../ApiResource");

function LinkService(client) {
  BaseService.call(this, client);

  this.uri = "/links";
}

LinkService.prototype.all = function(params) {
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

          data.push(new Link(apiResponse));
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

LinkService.prototype.retrieve = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id,
      method: "GET",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Link(response));
      });
    });
};

LinkService.prototype.create = function(params) {
  return this.httpClient
    .request({
      url: this.uri,
      method: "post",
      params,
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Link(response));
      });
    });
};

LinkService.prototype.archive = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id + "/archive",
      method: "post",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Link(response));
      });
    });
};

LinkService.prototype.unarchive = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id + "/unarchive",
      method: "post",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Link(response));
      });
    });
};

Object.setPrototypeOf(LinkService.prototype, BaseService.prototype);

module.exports = LinkService;
