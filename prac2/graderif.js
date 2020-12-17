console.log("welcome to grader");

function grader(marks){
    if( marks >= 80){
        console.log("Congratulations distinction");
    }

    if(marks >= 60 && marks < 80 ){
        console.log("Congratulations first class");
    }

    if(marks >= 35 && marks < 60 ){
        console.log("got second class");
    }

    if(marks < 35 ){
        console.log("failed");
    }
}

grader(90);
grader(75);
grader(55);
grader(20);
