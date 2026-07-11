// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// ************************************************
// PROBLEM 1:-
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
// ************************************************

// 1) Understanding the problem
// - what is temp. amplitude? Answer: difference between highest and lowest temp.
// - How do we compute max and min temp?
// - What is a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

/*
const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp != "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

// PROBLEM 2:-
// Function should now receive 2 arrays of temperature

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? Answer: No, just merge two arrays.

// 2) Breaking up into sub-problems
// - Merge 2 arrays.

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp != "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

// *****************************************************
// Debugging with the console and breakpoints
// *****************************************************
/*
const measureKelvin = function () {
  const measurenment = {
    type: "temp",
    unit: "celsius",

    // C) Fix the Bug
    // value: Number(prompt("Degree in Celsius:")),
    value: 10,
  };

  // Finding the Bug
  // console.log(measurenment);
  console.table(measurenment);

  // console.log(measurenment.value);
  // console.warn(measurenment.value);
  // console.error(measurenment.value);

  const kelvin = measurenment.value + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin());

// ****** Another Bug finding Example *******
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp != "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) Identify Bug
console.log(amplitudeBug);
*/

// *********