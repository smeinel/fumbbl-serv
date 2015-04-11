var express = require('express');
var router = express.Router();
var HTTP = require('q-io/http');
var Q = require('q');
var parseString = Q.denodeify(require('xml2js').parseString);
var parser = require('xml2json');

var config = require('../config');

router.get('/', function (req, res) {
	var remote_request = HTTP.read(config.FUMBBL_URL + 'matches');
	console.log('requesting ' + config.FUMBBL_URL + 'matches');
	remote_request.then(function (xml_body) {
		// return parseString(xml_body, {mergeAttrs: true});
		return parser.toJson(xml_body);
	})
	.then(function (body) {
		res.header('Content-Type','application/json');
		res.send(body);
	}).fail(function (err) {
		console.error('ERROR', err);
	});
});

module.exports = router;
