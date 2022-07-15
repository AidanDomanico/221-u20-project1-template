function feedItem(first, last, linkUrl, imageUrl) {
	this.firstName = first;
	this.lastName = last;
	this.linkUrl = linkUrl;
	this.imageUrl = imageUrl;
}

exports.createfeedItem = function(first, last, linkUrl, imageUrl) {
  return new feedItem(first, last, linkUrl, imageUrl);
};