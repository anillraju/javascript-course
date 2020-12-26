console.log("welcome to grader");
function graderifelse(marks){
    if( marks >= 80){
        console.log("Congratulations distinction");
    } else{

        if(marks >= 60 ){
            console.log("Congratulations first class");
        } else {

            if(marks >= 35){
                console.log("got second class");
            } else {
                    console.log("failed");
            }
        }
    }
}

graderifelse(90);
graderifelse(75);
graderifelse(55);
graderifelse(20);