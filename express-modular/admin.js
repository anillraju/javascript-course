var express = require("express");

var admin = express.Router();
admin.get("/", function(req, res){
    res.send("<h1> At admin root</h1>")
});

admin.get("/settings", function(req, res){
    res.send("<h1> At admin settings</h1>")
});

module.exports = admin;