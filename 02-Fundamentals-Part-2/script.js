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

