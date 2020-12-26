var express = require("express");

var app = express();

app.listen(8080, function(){
    console.log("Started app on 8080 port");
});


app.get("/test", function(req, res){
    res.send("<h1>Hello<h1>");
})

var click = 0;

app.get("/jsonendpoint/:index", function(req, res){
    res.setHeader("Content-Type", "application/json");
    click++;
    console.log(click);
    console.log("index of request: "+req.params.index);
    res.send(JSON.stringify({"click" : click, y : 2}));
})

app.use(express.static("public"));
