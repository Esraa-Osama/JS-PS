//~ Assignment 1 ~//

// **** A. PART 1: Coding Questions **** //

//^* 1-
console.log(Number("123") + 7);

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 2-
let falsyValue = 0;
if (!falsyValue) {
  console.log("Invalid");
}

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 3-
let box = "";
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  if (i != 9) {
    box += `${i}, `;
  } else {
    box += i;
  }
}
console.log(box);

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 4-
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((number) => {
  return number % 2 == 0;
});
console.log(evenNumbers);

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 5-
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let mergedNumbers = [...numbers1, ...numbers2];
console.log(mergedNumbers);

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 6-
let dayNumber = 2;
switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Please enter a number between 1 and 7");
    break;
}

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 7-
let strings = ["a", "ab", "abc"];
let lengths = strings.map((string) => {
  return string.length;
});
console.log(lengths);

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 8-
function divisibleBy3And5(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log(`${number} is Dividable By Both`);
  } else {
    console.log(`${number} is not Dividable By Both`);
  }
}
divisibleBy3And5(15);

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 9-
let squareOfNumber = (number) => number ** 2;
console.log(squareOfNumber(5));

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 10-
let person1 = { name: "John", age: 25 };
function destructObject(obj = {}) {
  const { name = "Esraa", age = "23" } = obj;
  return `${name} is ${age} years old`;
}
console.log(destructObject(person1));

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 11-
function sumOfNumbers(...numbers) {
  let sum = 0;
  if (numbers.length > 1) {
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log(sum);
  }
}
sumOfNumbers(1); // will not sum
sumOfNumbers(1, 2); // will sum => 3
sumOfNumbers(1, 2, 3, 4, 5); // will sum => 15

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 12-
function resolvesAfter3s() {
  return new Promise((resolve) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve();
      }
    }, 3000);
  });
}
resolvesAfter3s().then(function () {
  console.log("Success");
});

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 13-
function findLargestNumber(arr) {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}
console.log(findLargestNumber([1, 3, 7, 2, 4]));

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 14-
let person2 = { name: "John", age: 30 };
function getObjectKeys(obj) {
  let arr = [];
  for (const key in obj) {
    arr.push(key);
  }
  return arr;
}
console.log(getObjectKeys(person2));

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 15-
function splitStrings(str) {
  return str.split(" ");
}
console.log(splitStrings("The quick brown fox"));

//^ ****************************************************** ^//
//^ ****************************************************** ^//
//^ ****************************************************** ^//
//^ ****************************************************** ^//

// **** B. PART 2: Essay Questions **** //

//^* 1-
// forEach: forEach ignores async/await and doesn't wait, so all operations run at the same time | works only with array.
// example: if we fetch data and push it in an array using forEach, the array will be empty [].

// forOf: forOf respects async/await and it waits for each step | works with array and other datatypes like strings, maps, sets.
// example: if we fetch data and push it in an array using forOf, the array will have the fetched data [{},{},{}].

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 2-
// Hoisting is the process of moving any declaration to the top of its scope leaving assignment/initialization in its place.
//* example with var.
// console.log(x); //* this gives undefined because var x is hoisted and x = 3 still in the same place.
// var x = 3;
//* this is what happens.
// var x;
// console.log(x); //* x is undefined.
// x = 3;

// Temporal dead zone (TDZ) is the space between declaring a variable with let or const and assigning value to this variable
// at this space you can't access the variable.

//* example with let.
// console.log(x); //* this gives an error (can't access x before initialization) because let x is hoisted and x = 3 still in the same place.
// let x = 3;
//* this is what happens.
// let x; //* TDZ starts here, x must be assigned a value to remove error.
// console.log(x);
// x = 3; //* TDZ ends here, when x is assigned a value.

//* example with const.
// console.log(x); //* this gives an error (can't access x before initialization) because const x is hoisted and x = 3 still in the same place.
// const x = 3;
//* this is what happens.
// const x; //* TDZ starts here, x must be assigned a value to remove error.
// console.log(x);
// x = 3; //* TDZ ends here, when x is assigned a value.

//* when calling declaration function before declaring it, it works because any declaration is hoisted to the top of its scope.
// sayHi();
// function sayHi() {
//   console.log("Hi");
// }
// //* this is what happens.
// function sayHi() {
//   console.log("Hi");
// }
// sayHi();

//* but when calling expression function before declaring it, it gives an error
//* (sayHello is not a function with var, can't access sayHello before initialization with let and const)
//* because the declaration is hoisted
//* to the top of its scope and assignment still in the same place.
// sayHello();
// var sayHello = function () {
//   console.log("Hello");
// };
// //* this is what happens.
// var sayHello; // this is undefined
// sayHello(); // undefined() this is not a function
// sayHello = function () {
//   console.log("Hello");
// };

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 3-
// == compares only value, === compares value and datatype.

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 4-
// try-catch works as a script non-blocking way .. we put the code that may cause error inside try-catch
// so that the rest of the script is not blocked.
// without try-catch, if there is an error, it will block the rest of the script, but
// if try-catch is used, try will work and if there is an error in try, catch works and then the rest of the script is executed normally.

//* try-catch in synchronous operations, if there is an operation that doesn't take time, it runs immediately.
//*                            if there is an operation that takes time, it waits until it finishes and runs immediately.
//*                            so if there is an immediate error, it is caught.

//* try-catch in asynchronous operations, if there is an operation that doesn't take time, it runs immediately.
//*                           if there is an operation that takes time, it is ignored until it finishes and runs later.
//*                           so if there is a later error, it is not caught.
//* but try-catch in asynchronous operations using async/await it behaves as synchronous operations.

//? ****************************************************** ?//
//? ****************************************************** ?//

//^* 5-
// type coercion is done automatically (implicitly) by JS.
// console.log("10" + 10); //* (10) number is implicitly converted to a string ("10") and then concatenated => "1010".
// console.log(true + 10); //* (true) is implicitly converted to a number (1) and then sum => 11.
// console.log(null + 10); //* (null) is implicitly converted to a number (0) and then sum => 10.
// console.log("10" * 10); //* ("10") string is implicitly converted to a number (10) and then multiply => 100.
// console.log("20" - "10"); //* ("20") and ("10") strings are implicitly converted to a number (20, 10) and then subtract => 10.

// type conversion is done manually (Explicitly) by user.
// let userAge = "23";
// console.log(Number(userAge));
// console.log(+userAge);

// let userName = 23;
// console.log(String(userName));

// let isStudent = 1;
// console.log(Boolean(isStudent));

// let isAdmin = false;
// console.log(Number(isAdmin));
