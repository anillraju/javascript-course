var express = require("express");

var user = express.Router();
user.get("/", function(req, res){
    res.send("<h1> At user root</h1>")
});

user.get("/settings", function(req, res){
    res.send("<h1> At user settings</h1>")
});

module.exports = user;