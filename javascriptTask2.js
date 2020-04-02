/*A javascript program that calculates the interest of given values 
using a function that accepts an array of objects as input*/

//Array of objects called data
var data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }

];

//A function that accepts an array of objects and calculates the interest of values
function interestCalculator(anArray){

    var interestData = [];
    
    //iterating through the values of the array named data
    for (var i of data){
        
        if ((i.principal >= 2500) && ((i.time > 1) && (i.time < 3))) {

            var rate = 3;
            var interest = (i.principal * rate * i.time) / 100;
            
            //First object
            var myArrayObject1 = {
                principal: i.principal,
                rate: rate,
                time: i.time,
                interest: interest
            }
            interestData.push(myArrayObject1);
            

        } else if ((i.principal >= 2500) && (i.time >= 3)) {

            var rate = 4;
            var interest = (i.principal * rate * i.time) / 100;

            var myArrayObject2 = {
                principal: i.principal,
                rate: rate,
                time: i.time,
                interest: interest
            }
            interestData.push(myArrayObject2);
            

        } else if ((i.principal < 2500) || (i.time <= 1)) {

            var rate = 2;
            var interest = (i.principal * rate * i.time) / 100;

            var myArrayObject3 = {
                principal: i.principal,
                rate: rate,
                time: i.time,
                interest: interest
            }
            interestData.push(myArrayObject3);
                        

        } else {

            var rate = 1;
            var interest = (i.principal * rate * i.time) / 100;

            var myArrayObject4 = {
                principal: i.principal,
                rate: rate,
                time: i.time,
                interest: interest
            }
            interestData.push(myArrayObject4);
            

        }
                
    }
    console.log(interestData);
    return interestData;
}

interestCalculator(data);