<<<<<<< HEAD
"use strict";
/*
function calcAge(birthYear) {
  const age = 2030 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 2000 && birthYear <= 2010) {
      var genZ = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Puday";

      // Reassigning outer scope's variable
      output = "New Output.";

      const str = `OH, you are a genZ, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      const output = "New Output.";
    }

    //   console.log(str);
    console.log(genZ);
    console.log(output);
    // console.log(add(2, 3)); // can work when remove "use strict" mode.
  }
  printAge();

  return age;
}
const firstName = "Nitesh";
calcAge(2007);
*/

/*
// Variables
console.log(firstName);
// console.log(job);
// console.log(birthYear);

var firstName = "Nitesh";
let job = "student";
const birthYear = 2007;

// Function
console.log(addDecl(2, 3));
// console.log(addExp(2,3));
// console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}

// we can also declare function with var not only with const, but it also gives error, but different error!
const addExp = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;
*/

/*
// Example
console.log(numPressed);
if (!numPressed) deleteShoppingCart();
var numPressed = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(2007);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(2012);

/*
const nitesh = {
  year: 2007,
  calcAge: function () {
    console.log(this);
    // console.log(nitesh);
    console.log(2030 - this.year);
  },
};
nitesh.calcAge();

const puja = {
  year: 2010,
};
puja.calcAge = nitesh.calcAge;

puja.calcAge();

const f = nitesh.calcAge;
f();
*/

/*
const nitesh = {
  firstName: "Nitesh",
  year: 2007,
  calcAge: function () {
    // console.log(this);
    // console.log(nitesh);
    console.log(2030 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isGenZ = function () {
    //   console.log(self);
    //   console.log(
    //     self.year >= 2000 && self.year <= 2010
    //       ? `${self.firstName} is GenZ`
    //       : `${self.firstName} is not GenZ`,
    //   );
    //   // console.log(
    //   //   this.year >= 2000 && this.year <= 2010
    //   //     ? `${this.firstName} is GenZ`
    //   //     : `${this.firstName} is not GenZ`,
    //   // );
    // };

    // Solution 2
    const isGenZ = () => {
      console.log(this);
      console.log(
        this.year >= 2000 && this.year <= 2010
          ? `${this.firstName} is GenZ`
          : `${this.firstName} is not GenZ`,
      );
    };
    isGenZ();
  },
  greet: () => console.log(`Hello ${this.firstName}.`),
};
nitesh.greet();
nitesh.calcAge();

*/
// Arguments KeyWord
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3);
addExpr(2, 3, 5, 8, 13);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
=======
>>>>>>> 08f02dc (fixing code of behind-the-scene)

"use strict";
/*
function calcAge(birthYear) {
  const age = 2030 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 2000 && birthYear <= 2010) {
      var genZ = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Puday";

      // Reassigning outer scope's variable
      output = "New Output.";

      const str = `OH, you are a genZ, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      const output = "New Output.";
    }

    //   console.log(str);
    console.log(genZ);
    console.log(output);
    // console.log(add(2, 3)); // can work when remove "use strict" mode.
  }
  printAge();

  return age;
}
const firstName = "Nitesh";
calcAge(2007);
*/

/*
// Variables
console.log(firstName);
// console.log(job);
// console.log(birthYear);

var firstName = "Nitesh";
let job = "student";
const birthYear = 2007;

// Function
console.log(addDecl(2, 3));
// console.log(addExp(2,3));
// console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}

// we can also declare function with var not only with const, but it also gives error, but different error!
const addExp = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;
*/

/*
// Example
console.log(numPressed);
if (!numPressed) deleteShoppingCart();
var numPressed = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}


var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(2007);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(2012);

/*
const nitesh = {
  year: 2007,
  calcAge: function () {
    console.log(this);
    // console.log(nitesh);
    console.log(2030 - this.year);
  },
};
nitesh.calcAge();

const puja = {
  year: 2010,
};
puja.calcAge = nitesh.calcAge;

puja.calcAge();

const f = nitesh.calcAge;
f();
*/

/*
const nitesh = {
  firstName: "Nitesh",
  year: 2007,
  calcAge: function () {
    // console.log(this);
    // console.log(nitesh);
    console.log(2030 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isGenZ = function () {
    //   console.log(self);
    //   console.log(
    //     self.year >= 2000 && self.year <= 2010
    //       ? `${self.firstName} is GenZ`
    //       : `${self.firstName} is not GenZ`,
    //   );
    //   // console.log(
    //   //   this.year >= 2000 && this.year <= 2010
    //   //     ? `${this.firstName} is GenZ`
    //   //     : `${this.firstName} is not GenZ`,
    //   // );
    // };

    // Solution 2
    const isGenZ = () => {
      console.log(this);
      console.log(
        this.year >= 2000 && this.year <= 2010
          ? `${this.firstName} is GenZ`
          : `${this.firstName} is not GenZ`,
      );
    };
    isGenZ();
  },
  greet: () => console.log(`Hello ${this.firstName}.`),
};
nitesh.greet();
nitesh.calcAge();

*/
// Arguments KeyWord
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3);
addExpr(2, 3, 5, 8, 13);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
const puday = {
  firstName: "Puja",
  lastName: "Joshi",
  age: 19,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedPuday = marryPerson(puday, "Badu");

// const marriedPuday = puday;
// marriedPuday.lastName = "Badu";

console.log("Before", puday);
console.log("After", marriedPuday);

const puday2 = {
  firstName: "Puja",
  lastName: "Joshi",
  age: 19,
  family: ["Debaki", "Meena", "Prakash"],
};

// Shallow Copy
// const pudayCopy = {...puday2}
// console.log(pudayCopy);

// pudayCopy.lastName = "Badu";

// console.log("Before", puday2);
// console.log("After", pudayCopy);

// pudayCopy.family.push("Maya")
// pudayCopy.family.push("Parash")

// console.log(puday2, pudayCopy);

// Deep Copy/clone
const pudayClone = structuredClone(puday2);

pudayClone.family.push("Maya");
pudayClone.family.push("Parash");

console.log(puday2, pudayClone);
