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

//  *********************************************
// Array Operations
//  *********************************************
/*
const friend = ["Parbat", "Sushant", "Anita"];
console.log(friend);

// Adding method
// friend.push("Ashok");
const newLength = friend.push("Ashok");
console.log(friend);
console.log(newLength);
// console.log(friend.length);

friend.unshift("Anil");
console.log(friend);

// Removing method
// friend.pop();
const popped = friend.pop();

console.log(friend);
console.log(popped);

friend.shift()
console.log(friend);

// Position
console.log(friend.indexOf("Sushant"));
console.log(friend.indexOf("Nitesh"));

friend.push(23)
console.log(friend.includes("Sushant"));
console.log(friend.includes("Nitesh"));
console.log(friend.includes("23"));
console.log(friend.includes(23));

if(friend.includes("Sushant")){
  console.log("You have a friend called Sushant");
}
if(friend.includes("Nitesh")){
  console.log("You have a friend called Nitesh");
}
*/

// ******************************************
// CHALLENGE #2
// ******************************************
/*
const tip = function (calcTip) {
  if (calcTip > 50 && calcTip < 300) {
    return (15 / 100) * calcTip;
  } else {
    return (20 / 100) * calcTip;
  }
};

const bills = [125, 555, 44];
const tips = [tip(bills[0]), tip(bills[1]), tip(bills[bills.length - 1])];

const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[bills.length - 1],
];

console.log(bills[0], bills[1], bills[bills.length - 1]);
console.log(tips[0], tips[1], tips[tips.length - 1]);
console.log(total[0], total[1], total[total.length - 1]);

// Tutor Code
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

// ******************************************
// Introduction to Objects
// ******************************************
/*
const nitesh = {
  firstName: "nitesh",
  lastName: "badu",
  age: 2037 - 2007,
  job: "student",
  friends: ["Parbat", "Sushant", "Anita"],
};
console.log(nitesh);
*/

// **************************************************
// Dot vs Bracket Notation
// **************************************************
/*
const nitesh = {
  firstName: "nitesh",
  lastName: "badu",
  age: 2037 - 2007,
  job: "student",
  friends: ["Parbat", "Sushant", "Anita"],
};

console.log(nitesh);

// Retriving data from object
console.log(nitesh.job);
console.log(nitesh["job"]);

const nameKey = "Name";
console.log(nitesh["first" + nameKey]);
console.log(nitesh["last" + nameKey]);

// console.log(nitesh."first" + nameKey) //not work

const interestedIn = prompt(
  "What do you want to know about Nitesh? Choose between firstName, lastName, age, job and firends",
);

if (nitesh[interestedIn]) {
  console.log(nitesh[interestedIn]);
} else {
  console.log("Wrong Request :(");
  console.log(
    "Please Choose between firstName, lastName, age, job and firends",
  );
}

// Adding new data to object
nitesh.location = "Nepal";
nitesh["github"] = "npbadu-dev";
console.log(nitesh);

// small task
// "Nitesh has 3 friends, and his best friend is called Parbat."
console.log(
  `${nitesh.firstName} has ${nitesh.friends.length} friends, and his best friend is called ${nitesh.friends[0]}.`,
);
*/

// ***************************************************
// Object Method
// ***************************************************
/*
const nitesh = {
  firstName: "Nitesh",
  lastName: "Badu",
  birthYear: 2007,
  job: "Student",
  friends: ["Parbat", "Sushant", "Anita"],
  hasDriverLicesnse: true,

  // calcAge: function (birthYear) {
  // return 2037 - birthYear;
  // },

  // calcAge: function () {
  // console.log(this);
  // return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and ${this.hasDriverLicesnse ? "has a Driving License" : "has not a Driving License"}. He has ${this.friends.length} friends. His friends are ${this.friends[0]}, ${this.friends[1]} & ${this.friends[this.friends.length - 1]}`;
  },
  // in the above we can write this too ${this.age} instead of ${this.calcAge()}
};

console.log(nitesh.calcAge());

console.log(nitesh.age);
console.log(nitesh.age);
console.log(nitesh.age);

// console.log(nitesh.calcAge(nitesh.birthYear));
// console.log(nitesh["calcAge"](2007));

// Small Task;

// calling method
console.log(nitesh.getSummary());

// direct printing method
console.log(
  `${nitesh.firstName} is a ${nitesh.age} years old ${nitesh.job}, and ${nitesh.hasDriverLicesnse ? "has a Driving License" : "has not a Driving License"}. He has ${nitesh.friends.length} friends. His friends are ${nitesh.friends[0]}, ${nitesh.friends[1]} & ${nitesh.friends[nitesh.friends.length - 1]}`,
);
*/

// ******************************************************
// CHALLENGE #3
// ******************************************************
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

// mark.calcBMI();
// john.calcBMI();

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()})`,
  );
} else {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})`,
  );
}
*/



