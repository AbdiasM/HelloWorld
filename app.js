//console.log('hello world');
var express = require('Express');
var routes = require('./routes');
var path = require('path');

var app = express();

app.get('/', function (req, res) {
    res.json({ message: 'Hello! Welcome to Express' });
});

//app.get('/index', routes.index);

app.get('/index', function (req, res) {
    res.type('html');
    res.sendFile("/views/index.html");
});

app.listen(7001);
