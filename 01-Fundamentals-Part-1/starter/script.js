// Linking a JavaScript File
/*
let js = "amazing";
if (js === "amazing") {
  alert("JavaScript is Fun!");
}
console.log(40 + 8 + 23 - 10);
*/

// 05. Values and Variables
/*
let firstName = "Nitesh";
console.log(firstName);

let myFirstJob = "student";
let myCurrentJob = "learner";
*/

// 06. Data Types
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof(javascriptIsFun));

javascriptIsFun = "YES!";
// console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;  //not assigning value to year = undefined
console.log(year);
console.log(typeof year)

year = 2007; //assigning the value to year = now type change
console.log(typeof year)
*/

// let, const and var
/*
let age = 18;
age = 19;

const birthYear = 2007;
// birthYear = 2008;
// const job;

lastName = "Badu"; // work but not do this
*/

// Basic Operators
/*
const now = 2031;
const ageNitesh = now - 2007;
const ageKhil = now - 2014;
console.log(ageNitesh, ageKhil);

console.log(ageNitesh * 2, ageNitesh / 2, 2 ** 3);

const firstName = "Nitesh";
const lastName = "Badu";
console.log(firstName + " " + lastName);
*/

// Operators Precedence
/*
const now = 2031;
const ageNitesh = now - 2007;
const ageKhil = now - 2014;

console.log(now - 2007 > now - 2014);

const averageAge = (ageNitesh + ageKhil) / 2;
console.log(averageAge);
*/

// CHALLENGE #1
// mark & john ; BMI = mass / (height * height)
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

console.log(BMIMark, BMIJohn);
console.log(BMIMark2, BMIJohn2);

let markHigherBMI;
let markHigherBMI2;
if (BMIMark > BMIJohn) {
  markHigherBMI = "Mark";
} else {
  markHigherBMI = "John";
}
if (BMIMark2 > BMIJohn2) {
  markHigherBMI2 = "Mark";
} else {
  markHigherBMI2 = "John";
}
console.log(markHigherBMI);
console.log(markHigherBMI2);
*/

// Strings and Templates Literals
/*
const firstName = "Nitesh";
const job = "student";
const birthYear = 2007;
const year = 2026;

// normal string + number concatination
const nitesh =
  "I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  " " +
  "years old " +
  job +
  "!";
console.log(nitesh);

const niteshNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // Templates Literals
console.log(niteshNew);

console.log(`just a regular string...`);

console.log("String with \n\multiple \n\lines");
console.log(`String with
multiple
lines`); // Templates Literals
*/