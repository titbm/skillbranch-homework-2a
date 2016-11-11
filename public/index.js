'use strict';

var express = require('express');

var cors = require('cors');

var server = express();

var PORT = process.env.PORT || 3000;

server.use(cors());

server.get('/', function (request, response) {

  var a = 0;
  var b = 0;

  if (request.query.hasOwnProperty('a') && !isNaN(+request.query.a)) {
    a = +request.query.a;
  }
  if (request.query.hasOwnProperty('b') && !isNaN(+request.query.b)) {
    b = +request.query.b;
  }

  var answer = a + b;

  response.send('' + answer);
});

server.listen(PORT, function () {
  console.log('Server started on port ' + PORT);
});