var express = require("express");

var app = express();

app.listen(8081, function(){
    console.log("Express JS is running on port 8081");
});

app.get("/", respond);

function respond(req, res){
    var name = req.query.name;
    var times = req.query.times;

    if(times === undefined){
        times = 1;
    } else {
        times = parseInt(times);
    }

    if(name === undefined){
        name = "John Doe";
    }

    var msg = "";
    for(var i = 1; i <= times; i++){
        msg += `<h${i}> Hello Mr/Mrs: ${name} </h${i}>`;
    }
    
    res.send(msg);
}