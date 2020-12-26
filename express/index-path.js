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

  app.get('/Hello/:name/', function (req, res) {
    var name = req.params.name;
    var times = req.params.times;

    if(times === undefined){
        times = 2;
    } else {
        times = parseInt(times);
    }

    if(name === undefined){
        name = "John Doe";
    }

    var msg = "";
    for(var i = 1; i <= times; i++){
        msg += `<h${i}> Hello ${name} </h${i}>`;
    }
    
    res.send(msg);
});


app.get('/Hello/:name/:times', function (req, res) {
    var name = req.params.name;
    var times = req.params.times;

    if(times === undefined){
        times = 2;
    } else {
        times = parseInt(times);
    }

    if(name === undefined){
        name = "John Doe";
    }

    var msg = "";
    for(var i = 1; i <= times; i++){
        msg += `<h${i}> Hello ${name} </h${i}>`;
    }
    
    res.send(msg);
});


app.get('/Hello', function (req, res) {
    var name = req.params.name;
    var times = req.params.times;

    if(times === undefined){
        times = 2;
    } else {
        times = parseInt(times);
    }

    if(name === undefined){
        name = "John Doe";
    }

    var msg = "";
    for(var i = 1; i <= times; i++){
        msg += `<h${i}> Hello ${name} </h${i}>`;
    }
    
    res.send(msg);
});