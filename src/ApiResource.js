function ApiResource(response) {
  this.data = response.hasOwnProperty("data") ? response.data : response;

  if (this.data.hasOwnProperty("attributes")) {
    this.attributes = this.data.attributes;
    this.id = this.data.id;
  }

  if (response.hasOwnProperty("has_more")) {
    this.has_more = response.has_more;
  }
}

module.exports = ApiResource;
