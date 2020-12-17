class PiggyBank {

	constructor() {
		this._balance = 0;
		this._lt = [];
	}


	deposit(amt) {
		if (amt < 0)
			return this;

		console.log(`deposit: ${amt} balance: ${this._balance}`)
		this._lt.push(amt);
		this._balance = this._balance + amt;
		return this;
	}


	withdraw(amt) {

		if (this._balance < amt || amt < 0) {
			return this;
		}
		console.log(`withdraw: ${amt} balance: ${this._balance}`);
		this._lt.push(-amt);
		this._balance = this._balance - amt;
		return this;
	}

	get balance() {
		return this._balance;
	}

	set balance(amt) {
		if (amt > 0) {
			console.log("setting balance to : " + amt)
			this._balance = amt;
			this._lt.push(amt);
		}
	}

	statement() {
		console.log(`current balance is ${this._balance} and transactions were ${this._lt}`);
		return this;
	}
}

var pg1 = new PiggyBank();

pg1.balance = 30;

pg1.deposit(50);
pg1.deposit(50);
pg1.withdraw(50);
pg1.deposit(50);
pg1.withdraw(50);
pg1.statement();