const HttpClient = require("../HttpClient");

function BaseService(client) {
  this.httpClient = new HttpClient({
    baseUrl: client.baseUrl + "/" + client.apiVersion,
    apikey: client.apiKey,
  });
}

module.exports = BaseService;
