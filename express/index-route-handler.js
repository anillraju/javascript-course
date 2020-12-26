var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8081, function(){
    console.log("Express JS is running on port 8081");
});


app.get('/', function (req, res) {

    res.sendFile(__dirname + "/index.html")
  
  });

  app.param("times", function(req, res, next, times){
     console.log("param handler for times"+ times) ;
     time = 1;
     next();
  });

app.param("name", function(req, res, next, name){
     console.log("param handler for before") ;
     next();
     console.log("param handler for after") ;

  });

var funcA = function(req, res, next){
    res.write("In A");
    next();
    res.write("out A");
    res.end
}


var funcB = function(req, res, next){
    res.write("In B");
    next();
    res.write("out B");
}


app.get('/Hello/:name/:times', [funcA, funcB], function(req, res){
    res.write("In 3rd");
    
});
