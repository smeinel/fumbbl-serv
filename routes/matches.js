var express = require('express');
var router = express.Router();
var HTTP = require('q-io/http');

var config = require('../config');

router.get('/', function (req, res) {
	var remote_request = HTTP.read(config.FUMBBL_URL + 'matches');
	console.log('requesting ' + config.FUMBBL_URL + 'matches');
	remote_request.then(function (body) {
		res.header('Content-Type','text/xml');
		res.send(body);
	}).fail(function (err) {
		console.error('ERROR', err);
	});
});

module.exports = router;
