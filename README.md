# PayMongo NodeJS

PayMongo NodeJS library provides nodejs applications an easy access to the PayMongo API. Explore various classes that can represent API resources on object instantiation. The goal of this library is simplify PayMongo integration with any nodejs applications.

Check [example.js](https://github.com/paymongo/paymongo-node/blob/development/example.js) see usage examples.

## Pending Todos
- [ ] Unit Tests
- [ ] Code linting
- [ ] Code Cleanup and Improvements

## Requirements

NodeJS 8 or higher.
## Installation

Install the package with:

```sh
npm install paymongo-node --save
# or
yarn add paymongo-node
```

## Getting Started

Simple usage looks like:

```js
const paymongo = require('paymongo-node')('your secret api key');

paymongo.paymentIntents.create({
  amount: 10000,
  // insert other required attributes here
})
  .then(function(resource) {
    console.log(resource);
  })
  .catch(function(e) {
    if (e.type === "AuthenticationError") {
      // Handle authentication error
    } else if (e.type === "InvalidRequestError") {
      // Handle validation errors
      e.errors.forEach(function (error) {
        console.log(error.code);
        console.log(error.detail);
      })
    }
  });
```

Or `async`/`await`:

```js
const paymongo = require('paymongo-node')('your secret api key');

(async () => {
  try {
    const paymentIntent = await paymongo.paymentIntents.create({
      amount: 10000
      // insert other required attributes here
    });
    
    console.log(paymentIntent.id);
  } catch(e) {
    if(e.type === "InvalidRequestError") {
      // Handle validation errors
      e.errors.forEach(function (error) {
        console.log(error.code);
        console.log(error.detail);
      });
    }
  }
})();
```

## Verifying webhook signature

```js
try {
  const event = paymongo.webhooks.constructEvent({
    payload: "insert raw data",
    signatureHeader: "insert paymongo signature header",
    webhookSecretKey: "insert webhook secret key",
  });

  console.log(event);
} catch (e) {
  if (e.type === "SignatureVerificationError") {
    // Handle signature verification error
  }
}
```

To learn more about PayMongo's API, please check our developer [documentation](https://developers.paymongo.com).