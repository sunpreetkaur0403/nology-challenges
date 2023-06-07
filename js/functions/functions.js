//  # Function Challenges

// ## Challenge: Calculating Moon Orbits

// MVP
// Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.

const earthDays = 54;

function getNoOfOrbits(noOfEarthDays){
  const numberOfOrbits = noOfEarthDays / 27 ;
  return numberOfOrbits;
}

console.log(getNoOfOrbits(earthDays));


// ## Challenge: Working with Circles

// MVP
// Write a function that takes the radius of a circle and return its area.
// Write a function that takes the radius of a circle and return its perimeter.

// ```
// circleArea(10) => 314.16
// circlePerimeter(10) => 62.83

const circleArea = (r) => {
  return (Math.PI * (r ** 2)).toFixed(2)
}

const circlePerimeter = (r) => {
  return (2 * Math.PI * r).toFixed(2)
}

const radiusOfCircle = 5;

function areaOfCircle(radius){
   const area =  Math.PI * (radius ** 2);
   return area;
}


console.log(areaOfCircle(radiusOfCircle).toFixed(2));


function perimeterOfCircle(radius){
  const perimeter =  Math.PI * (radius * 2);
  return perimeter;
}

console.log(perimeterOfCircle(radiusOfCircle).toFixed(2));



// ## Challenge: Years to Days & Seconds

// MVP
// Create a function that takes your age in years and returns your age in days.
// Create a function that takes your age in years and returns your age in seconds.

// ```
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000

const ageInDays = (age) => {
  return age * 365;
}

console.log(ageInDays(27));

const ageInSeconds = (age) => {
  return age * 31536000;
}

console.log(ageInSeconds(27));


const ageInYears = 26;

function getAgeInDays(age){
  const ageInDays = age * 365 ;
  return ageInDays;
}

console.log(getAgeInDays(ageInYears));


function getAgeInSeconds(age){
  const ageInSeconds = age * 365 * 24 * 60 * 60;
  return ageInSeconds;
}

console.log(getAgeInSeconds(ageInYears));


// ## Challenge: Return the Remainder from Two Numbers

// MVP
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// ```
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0

console.log("Challenge 4: ");
const remainder = (num1, num2) => num1 % num2;

function getRemainder(number1 , number2){
  const remainder = number1 % number2;
  return remainder;
}

console.log(getRemainder(-5,7));

// ## Challenge: Basketball Points

// MVP
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.




function getFinalPoints(noOfTwoPointers, noOfThreePointers){
  const totalPoints = (noOfTwoPointers * 2 )+ (noOfThreePointers * 3);
  return totalPoints;
}

console.log(getFinalPoints(7,4));


// # Challenge: Less Than 100?

// MVP
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// ```
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

const lessThan100 = (num1, num2) => {
  const sumOfNums = num1 + num2;
  if (sumOfNums < 100) {
      return true;
  } else {
      return false;
  }
};


function checkLessThan100(number1, number2){
   if(number1 + number2 < 100){
    return true;
   }
   else return false;
}

console.log(checkLessThan100(7,4));



const anotherLessThan100 = (num1, num2) => num1 + num2 < 100;

console.log(anotherLessThan100(7,4));






