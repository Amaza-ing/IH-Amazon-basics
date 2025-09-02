console.log("Hello world!");


// How to declare a Variable

let username = "Adrián";
console.log(username);

username = "Mary";
console.log(username);

const pi = 3.1416;
console.log(pi);


// Type of Variables

let myString = "Hello";
let myNumber = 1234;
let myBoolean = true;
let myUndefined;
let myNull = null;

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);


// Strings

let doubleQuoteMsg = "'Hi', my name is \"Adrián\"";
console.log(doubleQuoteMsg);

let singleQuoteMsg = '\'Hi\', my name is "Adrián"';
console.log(singleQuoteMsg);

let templateString = `Hi, my name

is ${username}`;
console.log(templateString);

let strConcat = "Hi, my name is " + username;
console.log(strConcat);

console.log(username.length);

console.log(doubleQuoteMsg.toUpperCase());
console.log(doubleQuoteMsg.toLowerCase());

let otherStr = "      other phrase       ";
console.log(otherStr);
console.log(otherStr.trim());


// Numeric operators

let num1 = 10;
let num2 = 5;

const sumResult = num1 + num2;
console.log(sumResult);

const subResult = num1 - num2;
console.log(subResult);

const mulResult = num1 * num2;
console.log(mulResult);

const divResult = num1 / num2;
console.log(divResult);

const moduleResult = num1 % num2;
console.log(moduleResult);

num1 = 20;
console.log(num1);

num1 = num1 + 5;
console.log(num1);

num1 += 1;
console.log(num1);

num1 -= 1;
console.log(num1);

num1 *= 2;
console.log(num1);

num1 /= 2;
console.log(num1);

num1++;
console.log(num1);

num1--;
console.log(num1);

