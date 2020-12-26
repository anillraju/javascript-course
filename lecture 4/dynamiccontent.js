console.log("<h1>Welcome to Definition Lists</h1>");

console.log("<hr/>");

console.log("<dl>");
for(var i=0; i < 10; i++){
    console.log(`\t<dt>${i}</dt>`)
    console.log(`\t<dd>Hello World ${i}</dd>`);
}
console.log("</dl>");


var i = 1;
do{
    console.log("<h"+i+"> hi at size "+i+"</h"+i+">" );
    i++;
}while(i < 7);


var i = 0;
var data = ["orange", "apple", "mango", "pineapple"]
console.log(`<select>`);
do{
    console.log(`<option>${data[i]}</option>`);
    i++;
}while(i < 4);
console.log(`</select>`);


console.log(`<input list="fruits" placeholder="fruit name">`)
console.log(`<datalist id="fruits">`);


for(var fruit of data){
    console.log(`<option>${fruit}</option>`);
}

console.log(`</datalist>`);
