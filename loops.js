console.log("Loops");


// for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

const nameArray = ["Albert", "Bernard", "Charlie", "Daniel"];

for (let i = 0; i < nameArray.length; i++) {
  console.log(nameArray[i]);
}

// while loop

let counter = 1;

while (counter <= 100) {
  console.log(counter);

  counter++;
}


// for of loop

for(const username of nameArray) {
  console.log(username);  
}


console.log("The code has reached this line");
