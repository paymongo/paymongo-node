const SourceService = require("./Source");
const CustomerService = require("./Customer");
const LinkService = require("./Link");
const PaymentService = require("./Payment");
const PaymentIntentService = require("./PaymentIntent");
const PaymentMethodService = require("./PaymentMethod");
const RefundService = require("./Refund");
const WebhookService = require("./Webhook");

module.exports = {
  sources: SourceService,
  customers: CustomerService,
  links: LinkService,
  payments: PaymentService,
  paymentIntents: PaymentIntentService,
  paymentMethods: PaymentMethodService,
  refunds: RefundService,
  webhooks: WebhookService,
};
