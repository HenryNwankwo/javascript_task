var myName="NWANKWO HENRY IFUNANYA";

var myCourses=["HTML", "CSS", "JAVASCRIPT", "PYTHON", "NODE.JS", "UI/UX", "CODING"];

var lengthOfCourses = myCourses.length;
var evenLength=lengthOfCourses%2;
console.log("My name is: " + myName + "\nMy courses are:");
show();

console.log("No of courses = " +lengthOfCourses+"\nAll odd numbers from 1-200 are:");
 
//A for loop that determines and displays All odd numbers from 1-200   
for(var i = 1; i <= 200; i++){
    if(evenLength!==0){   
        var checkMod = i%2;
        if(checkMod!==0){
            console.log(i);
        }                      
    }    
}
//A function that iterates through the array containing my courses and prints it
function show(){
    for (var i of myCourses){
                console.log(i);        
    }    
}