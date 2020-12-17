var f1 = function(){
    console.log("i'm in a function literal older version");
}

function f3(){
    var x = 10;
    var f2 = (a,b,c) => {
        console.log("i'm in a function literal arrow marked "+ a + b + c + x);
        x = x +1;
    }

    f2(10, 20, 30);
    console.log("incremented x" + x);
}


f1();

f3();