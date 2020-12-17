
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


var base = {
    deposit : deposit,
    withdraw : withdraw,
    statement : statement
};

var pg1 = {
    balance : 0,
    lt : [],
    __proto__ : base
};


pg1.deposit(50);
pg1.deposit(30);
pg1.deposit(20);
pg1.withdraw(20);
pg1.withdraw(10);
pg1.withdraw(10);
pg1.withdraw(50);
pg1.statement();