// Question 23
/* Write a series of conditional tests. Print a statement describing each test 
and your prediction for the results of each test Create at least 10 tests. Have at least 5 
tests evaluate to True and another 5 tests evaluate to False.*/

let car = "VW Beetle"
console.log("Is My Car == VW Beetle? I predict True");
console.log(car == "VW Beetle");

console.log("Is My Car == BMW? I predict False");
console.log(car == "BMW");

console.log("Is 7 * 10 = 71? I predict False");
console.log(7 * 10 == 71);

console.log("Is 100 + 10 != 1000? I predict True");
console.log(100 + 10 != 1000);

console.log("Is Car.lenght == 9? I predict True");
console.log(car.length == 9);

console.log("Is 14 / 2 == 6? I predict False");
console.log(14/2 == 6);

console.log("Is Car.lenght != 9? I predict False");
console.log(car.length != 9);

console.log("Is 15 > 10? I predict True");
console.log(15 > 10);

console.log("Is My Car !== VW Beetle? I predict False");
console.log(car !== "VW Beetle");

console.log("2 * 16 && 64 / 2 == 32? I predict True");
console.log(2 * 16 && 64 / 2 == 32);

// Question 24
/* If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following: */

let carr = "corolla"
let arr = [3, 5, 15, 17, 55]

// Tests for equality with strings
console.log("Is my Carr === corolla? I predict True");
console.log(carr === "corolla");

// Tests for inequality with strings
console.log("Is my Carr !== corolla? I predict False");
console.log(carr !== "corolla");

// Tests using the lower case function
console.log("Is my Carr.tolowercase() === corolla? I predict True");
console.log(carr.toLowerCase() == "corolla");

// inequality with number
console.log("10 * 90 !== 900? I predict False");
console.log(10 * 90 !== 900);

// greater than and less than
console.log("1000 < 100? I predict False");
console.log(1000 < 100);

// greater than or equal to
console.log("91 * 5 >= 455? I predict True");
console.log(91 * 5 >= 455);

// ests using "and" operators
console.log("65 + 32 == 97 && 45 + 22 == 68? I predict False");
console.log(65 + 32 == 97 && 45 + 22 == 68);

// ests using "or" operators
console.log("65 + 55 == 120 || 45 + 45 == 90? I predict True");
console.log(65 + 55 == 120 && 45 + 45 == 90);

// Test whether an item is in a array
console.log("Is 17 Number in Array? I predict True");
console.log(arr.includes(17));

// Test whether an item is not in a array
console.log("Is 71 Number in Array? I predict False");
console.log(arr.includes(71));