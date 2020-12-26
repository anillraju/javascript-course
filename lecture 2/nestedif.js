console.log("Welcome to structured programming!");
console.log("Welcome to if compound statement");
var flag = false;
if(flag)
{
    console.log("I am inside if");
    console.log("I am still inside if");
}

var i = 11;
var j = 5;
var k = 2;

if(i < 10) {
    console.log("value of i is less than 10 "+ i);
    if(j == 3){
        console.log("value of j is equal to 3  "+ j);
    } else {
        console.log("value of j is not equal to 3 " + j);
    }
} else {
    console.log("value of i is greater than 10 "+ i);
    if(k > 3){
        console.log("value of k is greater than 3 "+ k);
    } else {
        console.log("value of k is less than 3 "+ k);
    }
    
}
console.log("Bye");