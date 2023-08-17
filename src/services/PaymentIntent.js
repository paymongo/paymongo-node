const BaseService = require('./Base');
const PaymentIntent = require('../entities/PaymentIntent');

function PaymentIntentService(client) {
  BaseService.call(this, client);

  this.uri = '/payment_intents';
}

PaymentIntentService.prototype.create = function(params) {
  return this.httpClient
    .request({
      url: this.uri,
      method: 'POST',
      params,
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new PaymentIntent(response));
      });
    });
};

PaymentIntentService.prototype.retrieve = function(id) {
  return this.httpClient
    .request({
      url: this.uri + '/' + id,
      method: 'GET',
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new PaymentIntent(response));
      });
    });
};

PaymentIntentService.prototype.capture = function(id, params) {
  return this.httpClient
    .request({
      url: this.uri + '/' + id + '/capture',
      method: 'POST',
      params,
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new PaymentIntent(response));
      });
    });
};

PaymentIntentService.prototype.cancel = function(id) {
  return this.httpClient
    .request({
      url: this.uri + '/' + id + '/cancel',
      method: 'POST',
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new PaymentIntent(response));
      });
    });
};

PaymentIntentService.prototype.attach = function(id, params) {
  return this.httpClient
    .request({
      url: this.uri + '/' + id + '/attach',
      method: 'POST',
      params : {
        ...params,
        origin: 'node'
      },
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new PaymentIntent(response));
      });
    });
}

Object.setPrototypeOf(PaymentIntentService.prototype, BaseService.prototype);

module.exports = PaymentIntentService;
