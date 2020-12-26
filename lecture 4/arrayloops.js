var arr = [10, 20, 30, 40, 50, 60, 70]

// console.log("without");
// console.log(arr[0]);
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

// console.log("do - while");
// var i = 0;
// do{
//     console.log(arr[i]);
//     i++;
// }while(i < arr.length);

// console.log("while");
// i=0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }

// console.log("for in");
// for(var i in arr){
//     console.log(arr[i]);
// }

// console.log("for of");
// for(var v of arr){
//     console.log(v);
// }

console.log("add to arr");

//arr[15] = 100;
arr["hello"] = 1000;
//arr[17] = 51

for(var v of arr){
    console.log(v);
}

console.log("indexes");
console.log("length "  + arr.length);



for(var v in arr){
    console.log(v);
}

console.log("truncation");

arr.length = 3;
for(var v in arr){
    console.log(v);
}
