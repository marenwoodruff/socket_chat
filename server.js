/*
* server.js
*/

// require express and other modules
var express = require('express'),
    app = express(),
    http = require('http').Server(app), // node http server
    bodyParser = require('body-parser'),
    io = require('socket.io')(http);

// listen on port 3000
http.listen(3000, function() { // node http server
  console.log('server started');
});

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// homepage route
app.get('/', function (req, res) {
  res.render('index');
});