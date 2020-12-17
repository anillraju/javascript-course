var animal = {
    a : 104,
    b : 103,
    d : d
}


var dog = {
    c : 101,
    e : 102
}

function d(value) {
    console.log("this a:"+this.a);
    console.log("passed value: "+value);
}


dog.__proto__ =    animal;

dog.d("abc")