console.log("Starting client server");


function Server(languageSpecificHello) {

	console.log("Starting Server ---");

	var name = "Anil";
	function prepareName(name){
		return "Mr. " +name;
	}
    
	var preparedName = prepareName(name);
	console.log("prepared string " + preparedName);
	var languageSpecificHi = languageSpecificHello(preparedName);  
	  
    console.log("---> " + languageSpecificHi);
}


function Client1() {

    console.log("Starting Client1");
    
    
    Server(function(x){
		var hello = `hello ${x}`;
		console.log(hello); 
		return hello;
    });
    console.log("Stopping Client1");
}

function Client2() {

    console.log("Starting Client2");
    var hindiHello = "नमसकार";
    Server( x => {
		var hello = `${hindiHello} ${x}`;
		console.log(hello); 
		return hello;
    });
    
    console.log("Stopping Client2");
}


Client1();
Client2();
