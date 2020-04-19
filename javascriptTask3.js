/** A function that takes a number
 * and replaces each number that is divisible 
 * by 2,3,5 with with some characters
 **/

function divisibleChecker(parameter){
    var outputArray = [];
    var number = parameter;    
    var divisibleBy2Word = "yu";
    var divisibleBy3Word = "gi";
    var divisibleBy5Word = "oh";     
    
    
    for(var count = 1; count <= number; count++){

        var divisibleBy2 = count % 2;
        var divisibleBy3 = count % 3;
        var divisibleBy5 = count % 5;


        if ((divisibleBy2 == 0) && (divisibleBy3 !== 0 && divisibleBy5 !== 0)) {

            outputArray.push(divisibleBy2Word);                
                
        } else if ((divisibleBy3 == 0) && (divisibleBy2 !==0 && divisibleBy5 !== 0)) {
            
            outputArray.push(divisibleBy3Word);   

        } else if ((divisibleBy5 == 0) && (divisibleBy2 !==0 && divisibleBy3 !== 0)) {

            outputArray.push(divisibleBy5Word);     

        } else if(divisibleBy2 == 0 && divisibleBy3 == 0 && divisibleBy5 !== 0){

            var divisibleBy23Word = "yu-gi";
            outputArray.push(divisibleBy23Word);            

        }
        else if (divisibleBy2 == 0 && divisibleBy5 == 0 && divisibleBy3 !== 0) {
            
            var divisibleBy25Word = "yu-oh";
            outputArray.push(divisibleBy25Word);

        } else if (divisibleBy3 == 0 && divisibleBy5 == 0 && divisibleBy2 !== 0) {

            var divisibleBy35Word = "gi-oh";
            outputArray.push(divisibleBy35Word);
        

        } else if (divisibleBy2 == 0 && divisibleBy3 == 0 && divisibleBy5 == 0) {

            var divisibleBy235Word = "yu-gi-oh";
            outputArray.push(divisibleBy235Word);            

        }else{

            outputArray.push(count);

        }
        
    }

    return outputArray;
}

var myOutput = divisibleChecker(67);
console.log("The Output Array is below: " );
console.log(myOutput);
