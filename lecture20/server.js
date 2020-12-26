var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));

var cookieParser = require("cookie-parser");
app.use(cookieParser());


var session = require('express-session');

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
}));

app.use(express.static('public'));

app.get("/Login", function(req, res){
  console.log("login");
  if(req.session.try === undefined){
    req.session.try = 0;
    res.redirect("/Login.html");
  } else if(req.session.try === 3) {
    res.redirect("Failure");
  } else {
    res.redirect("/Login.html");
  }
});

app.get("/Logout", function (req, res) {
  console.log("login");
  req.session.destroy();
  return res.redirect("/Login.html");
});


app.post('/authenticator', function (req , res) {
  console.log("login");
  console.log('auth');

  if(req.session.try === undefined ){
    res.redirect("/Login");
  } else if(req.session.try < 3) {
    console.log('auth 2');
    var name = req.body.name;
    var password = req.body.pass;

    console.log("name is " + name);
    console.log("Pass is " + "*".repeat(password.length));
    
    if(database(name, password)){
        req.session.isAuthenticated = true;
        res.redirect("/success/user/" + name);
    }
    else{
        req.session.try ++;
        res.redirect("/Login");
    }

  } else {
    res.redirect("Failure");
  }

});

app.get("/success/user/:name", function(req, res){
  console.log("login");
  if(req.session.isAuthenticated){
    res.send("<h1> welcome " + req.params.name + " </h1>");
  } else {
    res.redirect("/Login");
  }
});

app.get('/Failure', function (req, res) {
  console.log("login");
  res.redirect("/Failure.html");
});



app.listen(8089, function () {
  console.log("login");
  console.log('ExpressJS is running on port 8089');
});


function database(username, password){
  var users = [
    {
      username: "anil",
      password: "anil"
    },
    {
      username: "tom",
      password: "cat"
    }
  ];

  for(var user of users){
    console.log(user);
    if(username == user.username){
      if(password == user.password){
        return true;
      }
    }
  }

  return false;
}