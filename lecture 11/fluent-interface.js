


function deposit(amt){
    if(amt < 0)
    return this;

    console.log("deposit: "+amt)
    this.lt.push(amt);
    this.balance = this.balance + amt;
    return this;
}


function withdraw(amt){
    
    if(this.balance < amt || amt < 0){
        return this;
    }
    console.log("withdrew: "+amt)
    this.lt.push(- amt);
    this.balance = this.balance - amt;
    return this;
}

function statement(){
    console.log(`current balance is ${this.balance} and transactions were ${this.lt}`);
    return this;
}

function base(){
    this.withdraw = withdraw;
    this.deposit = deposit;
    this.statement = statement;
}

function PiggyBank(){
    this.balance = 0;
    this.lt = [];
}

PiggyBank.prototype.withdraw = withdraw;
PiggyBank.prototype.deposit = deposit;
PiggyBank.prototype.statement = statement;


var pg1 = new PiggyBank();

pg1.deposit(50);
pg1.deposit(30);
pg1.deposit(20);
pg1.withdraw(20);
pg1.withdraw(10);
pg1.withdraw(10);
pg1.withdraw(50);
pg1.statement();


var pg2 = new PiggyBank();
pg2.deposit(20);
pg2.deposit(20);
pg2.deposit(100);
pg2.withdraw(20);
pg2.withdraw(10);
pg2.withdraw(10);
pg2.withdraw(50);
pg2.statement();

var pg3 = new PiggyBank();
pg3.deposit(10).withdraw(5).deposit(10).withdraw(10).statement();