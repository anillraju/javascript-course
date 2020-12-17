function sum(a){

	function sumdash(b){
		return a + b;
	}
	return sumdash;
}


console.log("sum is : " + sum(4)(3));