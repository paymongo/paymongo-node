"use strict";

const axios = require("axios");
const AuthenticationError = require("./errors/AuthenticationError");
const InvalidRequestError = require("./errors/InvalidRequestError");
const ResourceNotFoundError = require("./errors/ResourceNotFoundError");
const RouteNotFoundError = require("./errors/RouteNotFoundError");
const ApiResource = require("./ApiResource");

function HttpClient(opts) {
  this.DEFAULT_TIMEOUT = 3000;

  this._instance = axios.create({
    baseURL: opts.baseUrl,
    timeout: this.DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(opts.apikey + ":").toString("base64"),
    },
  });
}

HttpClient.prototype.request = function(opts) {
  const requestConfig = {
    url: opts.url,
    method: opts.method,
  };

  if (opts.method === "GET" && opts.hasOwnProperty("params")) {
    requestConfig.params = opts.params;
  }

  if (opts.method !== "GET" && opts.hasOwnProperty("params")) {
    requestConfig.data = {
      data: {
        attributes: opts.params,
      },
    };
  }

  return this._instance
    .request(requestConfig)
    .then(function(response) {
      return new Promise(function(resolve, _reject) {
        resolve(new ApiResource(response.data));
      });
    })
    .catch(function(error) {
      if (error.response) {
        if (error.response.status)
          switch (error.response.status) {
            case 400:
              return new Promise(function(_resolve, reject) {
                reject(new InvalidRequestError(error.response.data));
              });
            case 404:
              if (error.response.data === "") {
                return new Promise(function(_resolve, reject) {
                  reject(
                    new RouteNotFoundError("Route " + opts.url + " not found.")
                  );
                });
              } else {
                return new Promise(function(_resolve, reject) {
                  reject(new ResourceNotFoundError(error.response.data));
                });
              }
            case 401:
              return new Promise((_resolve, reject) => {
                reject(new AuthenticationError(error.response.data));
              });
            default:
              break;
          }
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    });
};

module.exports = HttpClient;
