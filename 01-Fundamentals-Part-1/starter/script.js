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

// Taking Decision if..else.. statement
/*
const age = 15;
if (age >= 18) {
  console.log("Nitesh can start driving license 🚘");
} else {
  const yearLeft = 18 - age;
  console.log(`Nitesh is too young, wait another ${yearLeft} years :)`);
}

const birthYear = 2007;
let century;
if (birthYear < 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// CHALLENGE #2
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

// checking condition
if (BMIMark > BMIJohn) {
  markHigherBMI = "Mark's BMI is higher than John's!";
} else {
  markHigherBMI = "John's BMI is higher than Mark's!";
}
if (BMIMark2 > BMIJohn2) {
  markHigherBMI2 = "Mark's BMI is higher than John's!";
} else {
  markHigherBMI2 = "John's BMI is higher than Mark's!";
}
console.log(markHigherBMI);
console.log(markHigherBMI2);

// using templates literals
if (BMIMark > BMIJohn) {
  markHigherBMI = `Mark's BMI(${BMIMark}) is higher than John's BMI(${BMIJohn})`;
} else {
  markHigherBMI = `John's BMI(${BMIJohn}) is higher than Mark's BMI(${BMIMark})`;
}
if (BMIMark2 > BMIJohn2) {
  markHigherBMI2 = `Mark's BMI(${BMIMark2}) is higher than John's BMI(${BMIJohn2})`;
} else {
  markHigherBMI2 = `John's BMI(${BMIJohn2}) is higher than Mark's BMI(${BMIMark2})`;
}
console.log(markHigherBMI);
console.log(markHigherBMI2);
*/

// Type Conversion & Coercion
/*
// Type Conversion
const inputYear = "2007";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 19);
console.log(Number(inputYear) + 19);

console.log(Number("Nitesh"));
console.log(typeof NaN);

console.log(String(19), 19);
console.log(typeof String(19), typeof 19);

// Type Coercion
console.log("I'm " + 23 + " years old :)");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");
*/

// Truthy and Falsy Values
/*
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));

const money = 10;
if (money) {
  console.log("Don't Spent money carelessly :)");
} else {
  console.log("You must get a job!");
}

let height;
if(height){
  console.log("YAY! Height is  defined :)");
} else{
  console.log("Assign height (:")
}
*/

// Equality Operators (== vs ===)
/*
const age = "18";
if (age === 18) {
  console.log("You just became adult. (Strict)");
}
if (age == 18) {
  console.log("You just became adult. (Loose)");
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 7) {
  console.log("THALA for a reason :)");
} else if (favourite === 18) {
  console.log("CHIKU for a reason");
} else {
  console.log("Number is neither 7 nor 18...");
}

if (favourite !== 23) {
  console.log("Why not 23;");
}
*/

// Logical Operators
/*
const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);

const shouldDrive = hasDrivingLicense && hasGoodVision;
if (shouldDrive) {
  console.log("You are able to drive :)");
} else {
  console.log("Someone other will drive, you can't!");
}

const isTired = false;
console.log(hasDrivingLicense || hasGoodVision || isTired);

if (hasDrivingLicense && hasGoodVision && !isTired) {
  console.log("You are able to drive :)");
} else {
  console.log("Someone other will drive, you can't!");
}
*/

// CHALLENGE #3
/*
let scoreDolphins;
let scoreKoalas;

scoreDolphins = (96 + 108 + 89) / 3;
scoreKoalas = (88 + 91 + 110) / 3;
console.log("Dolphins", "Kolas");
console.log(scoreDolphins,  scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Kolas win the trophy");
} else {
  console.log("Both win the trophy");
}
*/



