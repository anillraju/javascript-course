var express = require("express");

var app = express();

var user = express.Router();

user.get("/", function(req, res){
    res.send("<h1> At user root</h1>")
});

user.get("/settings", function(req, res){
    res.send("<h1> At user user settings</h1>")
});


var admin = express.Router();
admin.get("/", function(req, res){
    res.send("<h1> At admin root</h1>")
});

admin.get("/settings", function(req, res){
    res.send("<h1> At admin settings</h1>")
});

app.use("/user", user);
app.use("/admin", admin);

app.listen(8080, function(){
    console.log("Started express on 8080");
})