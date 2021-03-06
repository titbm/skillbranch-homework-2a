const express = require('express');

const cors = require('cors');

const server = express();

const PORT = process.env.PORT || 3000;

server.use(cors());

server.get('/', function (request, response) {

  let a = 0;
  let b = 0;

  if (request.query.hasOwnProperty('a') && !isNaN(+request.query.a)) {
    a = +request.query.a;
  }
  if (request.query.hasOwnProperty('b') && !isNaN(+request.query.b)) {
    b = +request.query.b;
  }

  const answer = a + b;

  response.send(`${answer}`);
});

server.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});
