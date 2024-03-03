//excercise 1

let age = prompt(30);
if (age >= 18) {
    console.log("I are old enough to drive.");
} else {
    let yearsLeft = 18 - age;
    console.log("I am left with " + yearsLeft + " years to drive.");
}

// JavaScript Excercise 

let myAge = 25; 
let yourAge = prompt(30);
if (myAge > yourAge) {
    console.log("I am " + (myAge - yourAge) + "years older than you.");
} else if (myAge < yourAge) {
    console.log ("You are " + (yourAge - myAge) + " years older than me.");
} else {
    console.log("We are the same age.");
}

//Ternary operator

let a = 4;
let b = 3;

console.log(a > b ? " a is greater than b" : "ä is less than b");


// checking if a number is even or odd

let num = prompt("Enter a number:");
if (num % 2 === 0) {
    console.log ("num + is an even number");
}else {
    console.log(num + " is an odd number");
}

//second JavaScript excercise

let score = prompt("Enter your score:");
if (score >= 80 && score <= 100 ) {
    console.log("A");
}else if (score >= 70 && score <= 100) {
    console.log("B");
}else  if ( score >= 60 && score <= 69) {
    console.log("C");
}else  if ( score >= 50 && score <= 59) {
    console.log("D");
}else  if ( score >= 0 && score <= 49) {
    console.log("F");
}else   {
    console.log("Invalid score entered");
}

//determine season

let month = prompt("june");

if (monthInput = "july"); {

if (month === "september" || month === " october " || month === "november") {

    console.log( "Autumn");
} else if ( month === "december" || month === "January" || month ===  "february") {
    console.log ("Winter");
} else if ( month === "march"|| month === "April" || month ===  "May") {
    console.log ("Spring");
} else if ( month === "June"|| month === "july" || month ===  "August") {
    console.log ("Summer");
} else  {
    console.log ("Invalid month entered");
}

 }

// determine if its a weekend or not

let day = prompt("what is the day today?");
if (day === "saturday" || day === "sunday") {
console.log (day + " is a weekend.");
}else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "friday") {
    console.log (day + " is a working day.");
}else {
    console.log ("invalid day entered");
}

//Numbers of day in one month

let monthName = prompt ("Enter a month:");
let daysInMonth;

switch (monthName) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    daysInMonth = 31;
    break;

  case "april":
  case "june":
  case "september":
  case "november":
    daysInMonth = 30;
    break;
  case "february":
    daysInMonth = 28;
    break;
    default:
    console.log("Invalid month entered.");

}

if (daysInMonth) {
    console.log(monthName.charAt(0) + monthName.slice(1) + " has " +  daysInMonth + " days. ");
}