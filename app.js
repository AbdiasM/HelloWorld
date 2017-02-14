//console.log('hello world');
var express = require('Express');
var routes = require('./routes/index');
var path = require('path');
var fs = require('fs');
var app = express();

app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.json({ message: 'Hello! Welcome to Express' });
});

app.get('/index', routes.index);

//app.get('/index', function (req, res) {
//    //res.type('html');
//    //res.sendFile("/views/index.html");
//    //res.send("Express");
//    //var html = fs.readFileSync('./views/index.html', 'utf8')
//    //res.render('test', { html: html })
//});

app.listen(7001);
