var v1, v2;
function f1(){
    
    console.log("Entering f1");

    var a = "f1a";
    var b = "f1b";
    v1 = function f2(){
        console.log("entering f2");
        var c = "f2c";
        var d = "f2d";

        a = a + "f2";
        b = b + "f2";
        console.log("value of a : " + a);
        console.log("value of b : " + b);
        console.log("value of c : " + c);
        console.log("value of d : " + d);
        console.log("leaving f2");
    }

    v2 = function f3(){
        console.log("entering f3");
        var e = "f3e";
        var f = "f3f";

        a = a + "f3";
        b = b + "f3";
        console.log("value of a : " + a);
        console.log("value of b : " + b);
        console.log("value of e : " + e);
        console.log("value of f : " + f);
        console.log("leaving f3");
    }

       
}

f1();
v1();
v2();
v1();
v2();