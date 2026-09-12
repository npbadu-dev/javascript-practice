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
console.log(lufthansa);

const eurowings = {
  name: "Eurowings",
  itacode: "EW",
  bookings: [],
};

const book = lufthansa.book;
