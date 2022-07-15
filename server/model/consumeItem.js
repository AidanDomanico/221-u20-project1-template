function consumeItem(first, last, linkUrl, imageUrl) {
	this.firstName = first;
	this.lastName = last;
	this.linkUrl = linkUrl;
	this.imageUrl = imageUrl;
}

exports.createconsumeItem = function(first, last, linkUrl, imageUrl) {
  return new consumeItem(first, last, linkUrl, imageUrl);
};