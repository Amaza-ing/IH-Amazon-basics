console.log("Arrays & Objects");


// Arrays

const numArray = [10, 20, 30, 40, 50];
console.log(numArray);
console.log(numArray[0]);
console.log(numArray.length);
console.log(numArray[numArray.length - 1]);

const nameArray = ["Albert", "Bernard", "Charlie"];
console.log(nameArray);
console.log(nameArray[2]);

nameArray.push("Daniel");
console.log(nameArray);

nameArray.pop();
console.log(nameArray);

nameArray.unshift("Mary");
console.log(nameArray);

nameArray.shift();
console.log(nameArray);

nameArray.splice(1, 0, "Inserted Name");
console.log(nameArray);

nameArray.splice(1, 1);
console.log(nameArray);


// Objects

const book = {
  title: "Harry Potter",
  pages: 200,
  author: "J.K. Rowling"
};

console.log(book);
console.log(book.title);
console.log(book["author"]);

book.pages = 300;
console.log(book);


