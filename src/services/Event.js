function Event(apiResource)
{
  attributes = apiResource.attributes;

  this.id = apiResource.id;
  this.resource = attributes.data;
  this.type = attributes.type;
}


module.exports = Event;