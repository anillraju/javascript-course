
var express = require("express");
var bodyParser = require("body-parser")


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));


var logger = function(enabledFields){

    if(enabledFields.path && enabledFields.method){
        return function(req, res, next){
            console.log(`requested path is ${req.path}, method: ${req.method}`);
            next();
        };
    } else if(enabledFields.method){
        return function(req, res, next){
            console.log(`requested method ${req.method}`);        
            next();
        };
    } else {
        return function(req, res, next){
            console.log(`requested path ${req.path}`);        
            next();
        };
    }
    
};

app.use(logger( {path : true} ));

app.listen(8081, () => {
    console.log("Express started");
});


app.route("/Hello").get(function (req, res) {
    console.log("Hi");
    res.sendFile(__dirname + "/index.html");
}).post(function (req, res) {
    var response = "Hi ";
    for (var i = 1; i < req.body.times; i++)
        response += `<h${i}> ${req.body.name} </h${i}>`;

    res.send(response);
});