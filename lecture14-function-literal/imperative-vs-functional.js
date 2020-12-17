var a = [10, 20, 30, 40, 50, 60, 70];

console.log("imperative 1 ==> ");
for(var x in a){
    console.log(a[x] * 2);
}

console.log("imperative 2 ==> ");
for(var x of a){
    console.log(x * 2);
}

console.log("functional ==> ");
a.forEach(x => console.log(x * 2));

console.log("functional ==> ");
a.forEach(x => console.log(x * 2));


console.log("filter");
a.filter(x => x > 30).forEach(x => console.log(x));

console.log("find");
console.log(a.find(x => x > 30));

