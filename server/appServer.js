const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('client/public'));

app.use(bodyParser.json({ type: 'application/json' }));

const feedController = require('./controller/feedController')
const consumeController = require('./controller/consumeController')
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})


app.route('/api/feedControllers')
.get(feedController.getfeedItems) // <- get the list of feedControllers
.post(feedController.savefeedItem) // <- save a feedController to the list

app.route('/api/feedControllers/:feedControllerId')
.get(feedController.getfeedItem) // <- get a feedController by id
.delete(feedController.deletefeedItem) // <- delete a feedController by id
.patch(feedController.updatefeedItem) // <- update a feedController by id (onlyelements provided)

app.route('/api/consumeControllers')
.get(consumeController.getconsumeItems) // <- get the list of consumeControllers
.post(consumeController.saveconsumeItem) // <- save a user to the list
app.route('/api/consumeControllers/:userId')
.get(consumeController.getconsumeItem) // <- get a user by id
.delete(consumeController.deleteconsumeItem) // <- delete a user by id
.patch(consumeController.updateconsumeItem) // <- update a user by id (only elements provided)

app.listen(1337, () => console.log('Listening on port 1337.'))
