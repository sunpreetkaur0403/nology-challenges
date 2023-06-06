 /* ## Challenge: Comparing Numbers  */
 let x = 10;
 let y = 20;

 if(x > y){
  console.log("x is greater than y");
 }
 else if(x < y){
  console.log("x is smaller than y");
 }
 else{
  console.log("x is equal to y");
 }

 /*  ## Challenge: User Input Type  */
 let userInput;
 userInput = prompt("Please enter any input");
 console.log(userInput);

 if(typeof((parseInt(userInput)))=== "number")
 {
  console.log(((parseInt(userInput))) ** 2);
 }
 else if (typeof(userInput) === "string")
 {
  console.log(userInput);
 }
 else{
  console.log("invalid input");
 }

 console.log(typeof NaN);




// ## Challenge: Tell me the day!

 let day = 3;


 switch(day){
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break; 
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Saturday");
    break;
  default:
    console.log("I don't know what day it is!");
 }



// ## Challenge: Tell me the day!

let dayOfWeek = parseInt(prompt("Please enter any number from 0-7 to find out what day it is"));
 

 switch(dayOfWeek){
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break; 
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Saturday");
    break;
  default:
    console.log("I don't know what day it is!");
    console.log("Please enter a valid number");
 }


 
// ## Challenge: Eye Colour

let parent1 = "blue";
let parent2 = "green";

if(parent1 =="brown" && parent2 == "brown"){
console.log("Your eye colours are brown and brown, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%");
}
else if(parent1=="green" && parent2=="brown") {
    console.log("Your eye colours are green and brown, the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%");
}
else if (parent1=="blue" && parent2=="brown"){
  console.log("Your eye colours are blue and brown, the chances of your child having blue eyes is 50%, brown is 50% and green is 0%");
}
else if(parent1=="green"&& parent2=="green"){
  console.log("Your eye colours are green and green, the chances of your child having blue eyes is 25%, brown is <1% and green is 75%");
}
else if (parent1=="green"&& parent2=="blue"){
  console.log("Your eye colours are green and blue, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%");
}
else (parent1=="blue" && parent2=="blue")
  console.log("Your eye colours are green and blue, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%");


