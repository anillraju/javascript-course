
var EventEmitter =  require("events");

console.log("Event Emitter");


var em1 = new EventEmitter();

em1.on("overflow", function(a, b){
    console.log("overflow event", a , b);
    
});

em1.emit("overflow", "cat" , "dog");

em1.on("overflow" , function(){
    console.log("No param version");
});

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  

em1.emit("overflow", "cat1", "dog1");

var m = 0;

em1.on("underflow", function() {
    
    m++;
    console.log("underflow event", m);
    sleep(10000);
    setImmediate(() => {
        m++;
        console.log("set immediate", m);
    });
});

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");

em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");
em1.emit("underflow");


console.log("program finished");