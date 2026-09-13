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

