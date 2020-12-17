var v = [];
var counter = 0;
function f1(a,b){
    console.log("Entering f1");
    var f2 = function(){
        console.log("Entering f2");
        var c = 3;
        var d = 4;
        a++;
        b++;
        c++;
        d++;
        console.log("a = "+a);
        console.log("b = "+b);
        console.log("c = "+c);
        console.log("d = "+d);
        console.log("Leaving f2");
    }
    v[counter++] = f2;
    var f3 = function(){
        console.log("Entering f3");
        var e = 3;
        var f = 4;
        a++;
        b++;
        e++;
        f++;
        console.log("a = "+a);
        console.log("b = "+b);
        console.log("e = "+e);
        console.log("f = "+f);
        console.log("Leaving f3");
    }
    v[counter++] = f3;
    console.log("a = "+ a);
    console.log("b = "+ b);
    console.log("Leaving f1");
}

f1(1,2);
f1(10,20);
v[0]();
v[1]();
v[2]();
v[3]();
console.log("now ---> :");
for(var x in v){
    v[x]();
}