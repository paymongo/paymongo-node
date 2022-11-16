const BaseService = require("./Base");
const Webhook = require("../entities/Webhook");
const Event = require("../entities/Event");
const Listing = require("../entities/Listing");
const crypto = require("crypto");
const ApiResource = require("../ApiResource");
const UnexpectedValueError = require("../errors/UnexpectedValueError");
const SignatureVerificationError = require("../errors/SignatureVerificationError");

function WebhookService(client) {
  BaseService.call(this, client);

  this.uri = "/webhooks";
}

WebhookService.prototype.create = function(params) {
  return this.httpClient
    .request({
      url: this.uri,
      method: "post",
      params,
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Webhook(response));
      });
    });
};

WebhookService.prototype.update = function(id, params) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id,
      method: "put",
      params,
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Webhook(response));
      });
    });
};

WebhookService.prototype.retrieve = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id,
      method: "GET",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Webhook(response));
      });
    });
};

WebhookService.prototype.all = function(params) {
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

          data.push(new Webhook(apiResponse));
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

WebhookService.prototype.enable = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id + "/enable",
      method: "post",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Webhook(response));
      });
    });
};

WebhookService.prototype.disable = function(id) {
  return this.httpClient
    .request({
      url: this.uri + "/" + id + "/disable",
      method: "post",
    })
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new Webhook(response));
      });
    });
};

WebhookService.prototype.constructEvent = function(opts) {
  const payload = opts.payload;
  const signatureHeader = opts.signatureHeader;
  const webhookSecretKey = opts.webhookSecretKey;

  const arrSignature = signatureHeader.split(",");

  if (arrSignature.length < 3) {
    throw new UnexpectedValueError();
  }

  const timestamp = arrSignature[0].split("=")[1];
  const testModeSignature = arrSignature[1].split("=")[1];
  const liveModeSignature = arrSignature[2].split("=")[1];
  let comparisonSignature = "";

  if (testModeSignature !== "") {
    comparisonSignature = testModeSignature;
  }

  if (liveModeSignature !== "") {
    comparisonSignature = liveModeSignature;
  }

  const hmac = crypto.createHmac("sha256", webhookSecretKey);
  const data = hmac.update(timestamp + "." + payload);
  const hmacData = data.digest("hex");

  if (hmacData != comparisonSignature) {
    throw new SignatureVerificationError();
  }

  const jsonDecodedBody = JSON.parse(payload);
  const apiResource = new ApiResource(jsonDecodedBody);

  return new Event(apiResource);
};

Object.setPrototypeOf(WebhookService.prototype, BaseService.prototype);

module.exports = WebhookService;
