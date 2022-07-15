const feedItem = require('../model/feedItem')

var feedItems = [];

var feedItem1 = feedItem.createfeedItem("Sus", "Imposter", "https://bit.ly/3o4YvSu", "https://bit.ly/3cfPtQ8");
var feedItem2 = feedItem.createfeedItem("Dixie", "Normus", "https://bit.ly/3cjMIxd", "https://bit.ly/3AQkF2r");
var feedItem3 = feedItem.createfeedItem("Mike", "Oxsmall", "https://bit.ly/3aKANrR", "https://bit.ly/3z7Pa2A");
var feedItem4 = feedItem.createfeedItem("Bo", "Ner", "https://bit.ly/2BTd9Fz", "https://bit.ly/3PbdZ3x");
feedItems.push(feedItem1);
feedItems.push(feedItem2);
feedItems.push(feedItem3);
feedItems.push(feedItem4);

exports.getfeedItems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.savefeedItem = function(req, res) {
	let newfeedItem = feedItem.createfeedItem(req.body.firstName, req.body.lastName, req.body.linkUrl, req.body.imageUrl);
	feedItems.push(newfeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.getfeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feedItems[req.params.feedItemId]);
}

exports.deletefeedItem = function(req, res) {
	feedItems.splice(req.params.feedItemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.updatefeedItem = function(req, res) {
	// get the existing feedItem from the array
	var updatedfeedItem = feedItems[req.params.feedItemId];

	// check to see what has been passed and update the local copy
	console.log(req.body.firstName);
	if(req.body.firstName)

		updatedfeedItem.firstName = req.body.firstName;
	if(req.body.lastName)
		updatedfeedItem.lastName = req.body.lastName;
	if(req.body.linkUrl)
		updatedfeedItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedfeedItem.imageUrl = req.body.imageUrl;

	// save the local copy of the feedItem back into the array
	feedItems[req.params.feedItemId] = updatedfeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems[req.params.feedItemId]);
}