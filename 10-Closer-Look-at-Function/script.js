"use strict";

//  ***************** Default Parameters *******************
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 5);
createBooking("LH123", 10);

// createBooking("LH123", 1000); //directly skipping no. of passengers, writing price
createBooking("LH123", undefined, 1000);
*/

// ******* How Passing Arguments work (Value vs References ) ********
/*
const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24525908,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;
  if (passenger.passport === 24525908) {
    alert("Checked in!");
  } else {
    alert("Wrong Passport!");
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing......
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
  console.log(person.passport);
};
newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);
*/

// ************* Function accepting Callback Function *************
/*
// Generic Function
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

// Higher Order Function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transform String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
console.log("****************************************");
transformer("JavaScript is the best!", oneWord);
console.log("****************************************");

// JS use call back all the time
const high5 = function(){
  console.log(":) :) :)");
}
document.body.addEventListener("click", high5);
["Nitesh", "Rohit", "Khil"].forEach(high5)
*/

// ************* Function Returning Function ***************
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Nitesh");
greeterHey("Jonas");

greet("Hello")("Nitesh");

const greet1 = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet1("Haha!")("Lol");
*/

// *********** The Call and Apply Method **************
/*
const lufthansa = {
  airline: "Lufthansa",
  itacode: "LH",
  bookings: [],
  // book: function()
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.itacode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.itacode}${flightNum}`, name });
  },
};
lufthansa.book(239, "Nitesh Badu");
lufthansa.book(265, "John Smith");

const eurowings = {
  airline: "Eurowings",
  itacode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// book(23, "Sarah Williams"); // this will not work because this keyword is undefined here

// Call Method!
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 244, "Marry Copper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  itacode: "LX",
  bookings: [],
};
book.call(swiss, 583, "Marry Copper");

// Apply method
const flightData = [543, "George Copper"];
// book.apply(swiss, flightData);
// console.log(swiss);

// in modern JS apply method is not used anymore, because we can do it using call method too
book.call(swiss, ...flightData);

// *********** The Bind Method **************

// book.call(eurowings, 23, "Sarah Williams");
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven Williams");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Nitesh Badu");
bookEW23("Mark Copper");

// With EventListeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Application: means we can preset paramaters

const addTax = (rate, value) => value + rate * value;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23;
console.log(addVAT(100));

// Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

// !----------- CHALLENGE 1 ----------------
/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`,
      ),
    );
    console.log(answer);

    // Update answer
    typeof answer === "number" &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll Results are ${this.answers.join(", ")}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, "string");
poll.displayResults.call({ answers: [1, 5, 3, 9, 6] });
*/

// ****** Immediately Invoked Function Expressions (IIFE) ********
/*
const runOnce = function () {
  console.log("This will never run again! (NO IIFE)");
};
runOnce();

// IIFE
(function () {
  console.log("This will never run again! (Normal)");
})();

(() => console.log("This will never run again! (Arrow)"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

// ******************** Closure ***********************

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers.`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
