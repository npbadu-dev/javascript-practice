"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// put this outside to show object literals

const openingHours = {
  // thu: {
  //   open: 12,
  //   close: 22,
  // },
  // fri: {
  //   open: 11,
  //   close: 23,
  // },
  // sat: {
  //   open: 0, // Open 24 hours
  //   close: 24,
  // },

  // instead of above we can write like this in ES6 (3rd object literals)

  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // to access openingHours inside this restaurant before ES6, we write that by this:
  // openingHours: openingHours,  // it can be annoying bcz this property name is exactly the same as variable name from which we're getting this new object.

  // After ES6, enhanced object literals, above can be written as:
  openingHours, // this take this opening hours object and put it into the restaurant object and create a property name with exactly same as variable.

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
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

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}.`,
    );
  },

  // pizzas need to have at least one ingredient but the other ingredients are optional so for this type of situation REST parameter are perfect.
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
    // console.log(otherIngredients[0]); // why not working;
  },
};

// ******************* Sets *****************
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);
console.log(new Set("Nitesh"));

console.log(orderSet.size);
console.log(orderSet.has("Pizza"));
console.log(orderSet.has("Bread"));

orderSet.add("Garlic Bread");
orderSet.add("Garlic Bread");
console.log(orderSet);

orderSet.delete("Risotto");
console.log(orderSet);

// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}
// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(staffUnique.length);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size,
);
// != *************** Challenge 2 ***************************
/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀

// *****************************
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(game[team]);
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
*/

// ******************* Looping Objects *****************
/*
// Object.key property which work on property name
const properties = Object.keys(openingHours);
// console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
// console.log(openStr);

// Object.key property which work on property value
const values = Object.values(openingHours);
// console.log(values);

// Object.entries property which work on entire Object
const entries = Object.entries(openingHours)
// console.log(entries);

for(const [day, {open, close}] of entries){
console.log(`On ${day} we open at ${open} and close at ${close}.`);}
*/

// ********* Optional Chaining *******************
/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}
// work for fri, bcz we have fri property in openingHours object
// if (restaurant.openingHours.fri) {
// console.log(restaurant.openingHours.fri.open);
// }

// console.log(restaurant.openingHours.mon.open); // -- this gives error.
// With Optional Chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours.fri?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day} we open at ${open}`);
}

// Method
console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
console.log(restaurant.orderResoto?.(0, 1) ?? "Method doesn't exist");

// Arrays
const users = [{ name: "nitesh", email: "niteshprasadbadu@gmail.com" }];
console.log(users[0]?.name ?? "User array empty");
console.log(users[1]?.name ?? "User array empty");

// without optional chaining
if(users.length > 0) console.log(users[0].name);
else console.log("user array empty");
*/

// ************ For-of Loop ****************
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  // console.log(item);
  // console.log("one iteration complete!");
}

// also getting a current index.
// for (const item of menu.entries()) {
//   // console.log(item);
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// destructuring the item: bettern version of above code.
for (const [i, el] of menu.entries()) {
  // console.log(item);
  console.log(`${i + 1}: ${el}`);
}

// what is menu.entries()?
// console.log([...menu.entries()]);
*/

// != *************** Challenge 1 ***************************
/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task-1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);
console.log(typeof players1);

// Task-2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// Task-3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Task 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// Task-5

// Method 1: simple
// const {team1: team1, x: draw, team2: team2} = {...game.odds}

// Method 2:a little challenge
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// Task-6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// Task-7
team1 < team2 && console.log("Team 1 is more likely to win!");
team1 > team2 && console.log("Team 2 is more likely to win!");
*/

// ****************** Logical Assignment Operator ****************
/*
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// set default no. of guests for all the restaurant object that donot have that property
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.owner = rest1.owner && "<ANNONYMOUS>";
// rest2.owner = rest2.owner && "<ANNONYMOUS>";

// OR Assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH Assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND Assignment operator
// to learn about this and operator, let's say that we want to anonymize the names of the restaurant owners. So, when there currently is an owner, we want to basically replace that string with the string anonymous.
rest1.owner &&= "<ANNONYMOUS>";
rest2.owner &&= "<ANNONYMOUS>";

console.log(rest1);
console.log(rest2);
*/

// ******* The Nullish Coalescing Operator ***************
/*
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// the above code set the default value of guest to 10 if there is 0 no. of guest too, so which is the problem to fix that we have nullish coalescing operator.

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

// *************** Short Circuiting ************
/*
// 3 properties of logical operators
// 1) Use any data types

// -------- OR -----------
console.log(0 || null || undefined || 1);

restaurant.numGuests = 23;
// the below guest1 or guest2 will not work if restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10; // guest 1 declaring other method using short-circuit
console.log(guest2);

// -------- AND -----------

// at first checking whether restaurant.orderPizza exist or not, then if exist calling that function
// Method 1

if(restaurant.orderPizza){
  restaurant.orderPizza("mushroom", "spinach");
}
// Alternative method; using short-circuti
restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");
*/

// *************** REST Pattern ****************
/*
// 1) Destructuring

// SPREAD, bcz on the right side of '='
const arr = [1, 2, ...[3, 4, 5]];

// REST, bcz on the left side of '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// the rest syntax collect all the array elelemnts after the last declared Variable, it only collect the rest elements not collect the one which is skipped.
console.log(othersFood);

// Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(1, 3, 5, 7, 9);
add(1, 2, 4, 5, 7, 8, 9, 10);

const x = [23, 5, 7];
console.log(...x);
const [...numbers] = [23, 5, 7];
console.log(numbers);
add(...x);

// Real use cases (ordering pizza)
restaurant.orderPizza("mushrooms", "onions", "olives", "spinach");
restaurant.orderPizza("mushrooms");
*/

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
