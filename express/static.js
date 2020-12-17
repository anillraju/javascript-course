var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(express.static("public"));

app.listen(8081, function(){
    console.log("Express JS is running on port 8081");
});
