function f1(){
  console.log("Entering f1"+this);
  var a = 1;
  var b = 2;
  function f2(){
  	console.log("Entering f2"+this);

  	var c = 3;
  	var d = 4;


  	console.log("a =  "+ a);
  	console.log("b =  "+ b);
  	console.log("c =  "+ c);
  	console.log("d =  "+ d);
  	a = 100;
  	b = 200;
	console.log("Leaving f2");
  }
  f2();

  console.log("a =  "+ a);
  console.log("b =  "+ b);
  console.log("Leaving f1");
}

f1();
