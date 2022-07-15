var consumeItem = require('../model/consumeItem')

var consumeItems = [];

var consumeItem1 = consumeItem.createconsumeItem("Johnny", "Sins", "https://bit.ly/2DGDf0g", "https://bit.ly/3cme2Lr");
var consumeItem2 = consumeItem.createconsumeItem("Dwayne", "Johnson", "https://bit.ly/3z5q3O1", "https://bit.ly/3cgLOS2");
var consumeItem3 = consumeItem.createconsumeItem("Kevin", "Hart", "https://bit.ly/3o74pm9", "https://bit.ly/3RFpeCI");
var consumeItem4 = consumeItem.createconsumeItem("Margot", "Robbie", "https://bit.ly/3RvKMlg", "https://nym.ag/3o5TE3D");
consumeItems.push(consumeItem1);
consumeItems.push(consumeItem2);
consumeItems.push(consumeItem3);
consumeItems.push(consumeItem4);

exports.getconsumeItems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(consumeItems);
}

exports.saveconsumeItem = function(req, res) {
	let newconsumeItem = consumeItem.createconsumeItem(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
	consumeItems.push(newconsumeItem);
	res.setHeader('Csntent-Type', 'application/json');
	res.send(consumeItems);
}

exports.getconsumeItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(consumeItems[req.params.consumeItemId]);
}

exports.deleteconsumeItem = function(req, res) {
	consumeItems.splice(req.params.consumeItemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(consumeItems);
}

exports.updateconsumeItem = function(req, res) {
	// get the existing consumeItem from the array
	var updatedconsumeItem = consumeItems[req.params.consumeItemId];

	// check to see what has been passed and update the local copy
	console.log(req.body.firstName);
	if(req.body.firstName)

		updatedconsumeItem.firstName = req.body.firstName;
	if(req.body.lastName)
		updatedconsumeItem.lastName = req.body.lastName;
	if(req.body.linkUrl)
		updatedconsumeItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedconsumeItem.imageUrl = req.body.imageUrl;

	// save the local copy of the consumeItem back into the array
	consumeItems[req.params.consumeItemId] = updatedconsumeItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(consumeItems[req.params.consumeItemId]);
}