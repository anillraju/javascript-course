console.log("Starting client server");


function Server(clientFunc) {

    console.log("Starting Server ---");
    console.log("task 1 ---");
    var x = 4;
    clientFunc(x);    
    console.log("task 3 --- " + x);
}


function Client1() {

    console.log("Starting Client1");
    
    function m1(x){
        console.log(`task2 v 1`); 
    }
    Server(m1);
    console.log("Stopping Client1");
}

function Client2() {

    console.log("Starting Client2");
    function m1(x){
        x++;
        console.log(`task2 v 2`); 
    }
    Server(m1);
    
    console.log("Stopping Client2");
}


Client1();
Client2();
