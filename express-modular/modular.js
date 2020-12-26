var express = require("express");

var app = express();

var admin = require("./admin");
var user = require("./user");

app.use("/admin", admin);
app.use("/user", user);


app.listen(8080, function(){
    console.log("started express on 8080");
})