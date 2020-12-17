function deposit(amt){    
    this.balance += amt;
    this.lastTransaction = amt;
}

function withdraw(amt){
    if(this.balance < amt){
        return;
    }
    this.balance = this.balance - amt;
    this.lastTransaction = amt;
}

function statement(){
    console.log(`Balance is : ${this.balance} and last transaction is : ${this.lastTransaction}`);
}

function PiggyBank(){
    var base = {
        withdraw : withdraw,
        statement : statement,
        deposit : deposit
    }

    var piggy = {
        balance : 0,
        lastTransaction : 0,
        __proto__ : base
    }


    return piggy;
}


var pg1 = PiggyBank();
pg1.deposit(50);
pg1.statement();
pg1.deposit(50);
pg1.statement();
pg1.withdraw(20);
pg1.statement();



var pg2 = PiggyBank();
pg2.deposit(30);
pg2.statement();
pg2.deposit(30);
pg2.statement();
pg2.withdraw(10);
pg2.statement();