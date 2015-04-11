var express = require('express');
var router = express.Router();

var config = require('../config');

router.get('/', function (req, res) {
	console.log('requesting ' + config.FUMBBL_URL + 'matches');
	res.send('/matches/');
});

module.exports = router;
