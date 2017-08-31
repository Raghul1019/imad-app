var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
    res.send('idhu dhan da modho article uh :)');
});
app.get('/article-two', function (req, res) {
    res.send('idhu dhan da rendavadhu article');
});
app.get('/article-three', function (req, res) {
    res.send('idhu dhan da moonavadhu article uh');
});
app.get('/image', function(res, req) {
    res.sendFile(path.join(_dirname,'ui', 'my.png' ));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
