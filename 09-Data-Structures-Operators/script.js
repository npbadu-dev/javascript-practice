"use strict";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:30",
    address = "badenha",
  }) {
    // console.log(this);
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
    // console.log(starterIndex);
    // console.log(mainIndex);
    // console.log(time);
    // console.log(address);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}.`,
    );
  },
};

// ************ Spread Operator ******************
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, 7, 8, 9];
console.log(badNewArr);

// using spread operator
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(...newMenu);

// Copy Array (Shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];

// Merge two arrays together
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables
const str = "Nitesh";
const letters = [...str, , "N."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Badu`); // give error

// Order Pasta Function (Real world example)

const ingredients = [
  prompt("Let's Make Pasta! Ingredients 1?"),
  prompt("Ingredients 2?"),
  prompt("Ingredients 3?"),
];
console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // without using spread operators
restaurant.orderPasta(...ingredients);


// Object
const newRestaurant = { foundingYear: 1998, ...restaurant, founder: "Nitesh" };
console.log(newRestaurant);

const restaurantShallowCopy = { ...restaurant };
restaurantShallowCopy.name = "NP Dhaba"

console.log(restaurantShallowCopy.name, restaurant.name);
*/
// *********** Destructuring Objects **************
/*
restaurant.orderDelivery({
  time: "22:30",
  address: "Attariya, kailali",
  mainIndex: 2,
  starterIndex: 2,
});

// when there is no property that was pass in function
restaurant.orderDelivery({
  address: "Attariya, kailali",
  starterIndex: 1,
});
const { name, openingHours, categories } = restaurant;
// const { jpt, openingHours, categories } = restaurant; // when we give a random name rather than object property then that random name get undefined. To fix that problem we set default values
console.log(name, openingHours, categories);

// if we want to save that object property data in new Name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Swapping or mutating variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

console.log("Before: ", a, b);
// {a,b} = obj; // gives error
({ a, b } = obj);
console.log("After:", a, b);

// nested Objects
const {
  fri: { open: openRestaurant, close: closeRestaurant },
} = openingHours;
console.log(openRestaurant, closeRestaurant);
*/
// *********** Destructuring Array **************
/*
const arr = [2, 3, 4];
// const arr = [2, 3, 4, 5];  // also work when there is more data but less data define while destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Declaring variable using destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// swapping main content to secondary and vice versa 
// ------ Method 1 -------
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// ------ Method 2: destructuring method (Mutating variables)------
[main, secondary] = [secondary, main];
console.log(main, secondary);

// 3rd use cases of destructuring array
// Receive 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested array destructing
const nested = [2, 4, [5, 6]];
// const [n1, , n2] = nested;
// console.log(n1, n2);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
// let's suppose we don't know the length of array
// const [p, q, r] = [2,3]
// console.log(p, q, r); // in the position of 'r' there is no values so, r = undefined

// to prevent that we can simply define default values, if value exist, then they set in that position variable, if not simply that position value store default value
const [p = 1, q = 1, r = 1] = [2, 3];
console.log(p, q, r);

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);
*/
