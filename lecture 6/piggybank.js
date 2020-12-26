/* Piggy Bank */

console.log("welcome to piggy bank !");

var base = {
    deposit: deposit,
    withdraw: withdraw,
    statement: statement
}
var account1 = {
    balance : 0,
    lastTransaction : 0,
    __proto__ : base

}

var account2 = {
    balance : 0,
    lastTransaction : 0,
    __proto__ : base
}


function withdraw(amount){
    
    console.log("Going to withdraw Rs." + amount);
    if(this.balance < amount){
        console.log("insufficient balance");
        return;
    }
    this.lastTransaction = -amount;
    this.balance = this.balance + this.lastTransaction;
    this.statement();
}

function deposit(amount){
    console.log("Going to deposit Rs." + amount);
    this.lastTransaction = amount;
    this.balance = this.balance + this.lastTransaction;
    this.statement();
}    


function statement(){
    console.log("Balance = Rs." + this.balance + " last transaction = Rs." + this.lastTransaction);
}

account1.statement();
account1.deposit(50);
account1.deposit(20);
account2.deposit(20);
account1.deposit(20);
account1.deposit(20);
account1.withdraw(100);
account1.withdraw(10);
