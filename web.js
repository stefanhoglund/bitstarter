var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var fString = fs.readFileSync('index.html');

var fString2 = new Buffer(fString);

app.get('/', function(request, response) {
  response.send(fString2.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
