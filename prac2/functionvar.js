function percentage(p,c,m){
    var marks = p + c + m;
    var percentage = marks * 100 / 300 ;
    return percentage;
}

var result1 = percentage(67, 77, 87);
console.log(result1)
var result2 = percentage(65, 75, 85);
console.log(result2)
var result3 = percentage(67, 35, 55);
console.log(result3)