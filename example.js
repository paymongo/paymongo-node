"use strict";

// To include paymongo library in your project, use const paymongo = require('paymongo');
const paymongo = require("./src/paymongo")("<insert secret api key here");

// Create a source
paymongo.sources
  .create({
    amount: 10000,
    currency: "PHP",
    type: "gcash",
    redirect: {
      success: "https://google.com",
      failed: "https://google.com",
    },
  })
  .then(function(resource) {
    console.log(resource);
  })
  .catch(function(e) {
    if (e.type === "AuthenticationError") {
      console.log("auth error");
    } else if (e.type === "RouteNotFoundError") {
      console.log("route not found");
    } else if (e.type === "InvalidRequestError") {
      console.log(e.errors);
    }
  });

// retrieve a source by id
paymongo.sources
  .retrieve("insert source id here")
  .then(function(resource) {
    console.log(resource);
  })
  .catch(function(e) {
    if (e.type === "AuthenticationError") {
      console.log("auth error");
    } else if (e.type === "ResourceNotFoundError") {
      console.log(e.errors);
    } else if (e.type === "RouteNotFoundError") {
      console.log("route not found");
    } else if (e.type === "InvalidRequestError") {
      console.log(e.errors);
    }
  });

// Webhook signing
try {
  const event = paymongo.webhooks.constructEvent({
    payload: "insert raw data",
    signatureHeader: "insert signature header",
    webhookSecretKey: "insert webhook secret key",
  });

  console.log(event);
} catch (e) {
  if (e.type === "SignatureVerificationError") {
    console.log("handle signature verification error");
  }
}
