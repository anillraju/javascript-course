var express = require('express');
var app = express();
app.use(function(req,res,next){
  console.log("Middleware");
  next();
})
app.param("msg",function(req, res, next, msg){
  console.log("Param Handler");
  console.log(`msg = ${msg}`);
  next();
})
app.param("times",function(req, res, next, times){
  console.log("Param Handler");
  console.log(`times = ${times}`);
  next();
})
app.get('/print/:msg/:times',
  function(req,res,next){
    console.log("Filter Function")
    next();
  },
  function (req, res) {
    console.log("Main Handler");
    var times = req.params.times;
    var message = req.params.msg;
    if(times === undefined){
      times = 10;
    }
    else
    {
        times = parseInt(times);
    }
    if(message === undefined){
      message = "Hello World";
    }
    var data = "";
    for(var i = 0 ; i < times ; i++){
      data += "<h1>" + message + "</h1>";
    }
    res.send(data);
  }
);
app.listen(8081, function () {
   console.log('ExpressJS is running on port 8081');
});
