console.log("Conditionals");

const age = 22;

if (age >= 18) {
  console.log("You are an adult");
} else if (age > 10) {
  console.log("You are older than 10");
} else if (age < 0) {
  console.log("You cannot have a negative age");
} else if (age === 1) {
  console.log("You are 1 year old");
} else {
  console.log("You are a minor");
}


if (age % 2 === 0) {
  console.log("Your age is an even number");  
} else {
  console.log("Your age is an odd number");  
}


// Truthy & Falsy

let myCondition = true;

if (myCondition) {
  console.log("The condition is truthy");  
} else {
  console.log("The condition is falsy");  
}

// TRUTHY   |   FALSY
// true     |   false
// "asdf"   |   ""
// 1234     |   0
//          |   undefined
//          |   null
// []       |
// {}       |


const password = "";

console.log(password.length);
console.log(!password.length);

if (!password.length) {
  console.log("Your password cannot be empty");  
}
