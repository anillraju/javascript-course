function f1(a,b){
    var sum = a + b;
    console.log("hello");
    console.log("bye");
    return sum;
}

var res = f1(5,5);
console.log(res)

function defaultFunc(a, b = 20){
    return a + b;
}

console.log(defaultFunc(5));



function spreadOperator(a, b, c, d, e, f, g){
    return a + b + c +d + e +f + g;
}

var arr = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
var res = spreadOperator(...arr);
console.log(res);


function sumnooparguments(){
    var res = 0;
    console.log(typeof(arguments));
    for(var arg of arguments){
        res += arg;
    }

    return res;
}

console.log(sumnooparguments(1,2,3,4));

function restArgs(a, ...b){
    var res = a;
    console.log(typeof(b));
    for(var arg of b){
        res += arg;
    }

    return res;
}

console.log(restArgs(1,2,3,4));

