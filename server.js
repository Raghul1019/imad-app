var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

 
  var  articleone = {
                  title : 'Article one - Raghul Prasad ',
                  heading:'Article-One',
                  content:` <p>   
                              This is my first article.This is my first article.This is my first article.This is my first article.
                        </p>`
    };
                
     var articletwo ={
                  title : 'Article two - Raghul Prasad ',
                  heading:'Article-Two',
                  content:` <p>   
                              This is my second article.This is my second article.This is my second article.This is my second article.
                            </p>`
                };
     var articlethree ={
                  title : 'Article three - Raghul Prasad ',
                  heading:'Article-Three',
                  content:` <p>   
                              This is my third article.This is my third article.This is my third article.This is my third article.
                            </p>`
        
                
               };
   

function createTemplate (data) {
    
var title=data.title;
var heading=data.heading;
var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet"  type="text/css"/>
    </head>
    <body>
        <div class="content">
            <div>
                <a href="/">Home</a>
            </div>
    <hr/>
    <h1>
        ${heading}
    </h1>
    <div>
       ${content}
    </div>
            <div>
                <a href="/article-one">Article-One</a>
            </div>
            <div>
                <a href="/article-two">Article-two</a>
            </div>
                <div>
                    <a href="/article-three">Article-Three</a>
                 </div>
        </div>
    </body>  
</html>

`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
    
  res.send(createTemplate(articleone));
    
});
app.get('/article-two',function (req, res) {
    res.send(createTemplate(articletwo));
});
app.get('/article-three',function (req, res){
    res.send(createTemplate(articlethree));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/f.png', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'f.png'));
});

app.get('/ui/main.js', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

