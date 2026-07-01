// **************************************
// Activating Strict Mode
// **************************************

/*
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}
if(hasDriversLicense){
    console.log("You Can Drive :D");
}
// strict mode reserved this word: interface, private..
// const interface = "Audio";
// const private = 534;
*/

// **************************************
// Function
// **************************************

/*
function logger() {
  console.log("My name is Nitesh!");
}

// calling or running or invoking the function.
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// **************************************
// Function Declaration vs Expressions
// **************************************

/*
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(2007);
console.log(age1);

// expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(2007);
console.log(age2);
*/

// **************************************
// Arrow Function
// **************************************

/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(2007);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  // return retirement;
  return `${firstName} retires in ${retirement} years.`
};
console.log(yearsUntilRetirement(2007, "Nitesh"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

// *****************************
// Function Calling Other Function
// *****************************
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

// **************************************
// Reviewing Functions
// **************************************
/*
const calAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else if (retirement <= 0) {
    console.log(`${firstName} is already retired;`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2007, "Nitesh"));
console.log(yearsUntilRetirement(1950, "Jonas"));
*/

// **************************************
// CHALLENGE #1
// **************************************
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKolas) {
  if (avgDolphins >= avgKolas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKolas})`);
  } else if (avgKolas >= avgDolphins * 2) {
    console.log(`Kolas win (${avgKolas} vs ${avgDolphins})`);
  } else {
    console.log(`No Team Win...`);
  }
}

// TEST DATA 1
console.log("Test 1");
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);

// TEST DATA 2
console.log("Test 2");
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
*/

// ************************************************
// Introduction to Arrays
// ************************************************
/*
const friend1 = "Parbat";
const friend2 = "Sushant";
const friend3 = "Anita";

const friend = ["Parbat", "Sushant", "Anita"];
console.log(friend);


const years = new Array(1991, 2001, 2011, 2021);
// console.log(years);
// console.log(years[0]);

console.log(friend[0]);
console.log(friend.length);
console.log(friend[friend.length - 1]);

friend[2] = "Moti";
console.log(friend);

// friend = ["Umesh", "Roshan", "Sameer"]; //this give error.

const firstName = "Nitesh";
const nitesh = [firstName, "Badu", 2037-2007, "student", friend];
console.log(nitesh);
console.log(nitesh.length);

// small-exercise
const calcAge = function(birthYear){
  return 2037 - birthYear;
}

const year = [1990, 1967, 2002, 2007, 2014, 2026];
// console.log(birthYear(calcAge));

const age1 = calcAge(year[0]);
const age2 = calcAge(year[3]);
const age3 = calcAge(year[year.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(year[0]),
  calcAge(year[3]),
  calcAge(year[year.length - 1]),
];
console.log(ages);
*/
