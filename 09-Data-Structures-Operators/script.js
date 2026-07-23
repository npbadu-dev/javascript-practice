"use strict";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

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

// ------ Method 2: destructuring method ------
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
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

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
