function PiggyBank(){
	var balance = 0;
	var lt = [];

	function withdraw(amt){
		if(amt > balance){
			balance = balance - amt;
			lt.push(-amt);
		}
	}

	function deposit(amt){
		if(amt > 0){
			balance = balance + amt;
			lt.push(amt);
		}
	}


	function statement(){
		console.log(`balance : ${balance} and transactions : ${lt}`);
	}

	var returnObj = {
		withdraw : withdraw,
		deposit : deposit,
		statement : statement
	}

	return returnObj;
}


var pg1 = PiggyBank();

pg1.deposit(40);
pg1.deposit(40);
pg1.withdraw(20);
pg1.withdraw(10);
pg1.statement();


var pg2 = PiggyBank();

pg2.deposit(20);
pg2.deposit(10);
pg2.withdraw(3);
pg2.withdraw(7);
pg2.statement();



