function Listing(listingData) {
  this.has_more = listingData.has_more;
  this.data = listingData.data
}

module.exports = Listing;