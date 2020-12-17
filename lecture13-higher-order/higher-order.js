console.log("Starting client server");


function Server(){

	console.log("Starting Server");
	console.log("Stopping Server");
}


function Client1(){

	console.log("Starting Client1");
	Server();
	console.log("Stopping Client1");
}


function Client2(){

	console.log("Starting Client2");
	Server();
	console.log("Stopping Client2");
}

Client1();
Client2();
