var express = require('express');
var app = express();
var server;

// Routes
var matches = require('./routes/matches.js');

app.get('/', function (req, res) {
  res.send('TBD');
});

app.use('/matches', matches);

server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('fumbbl-srv app listening at http://%s:%s', host, port);
});