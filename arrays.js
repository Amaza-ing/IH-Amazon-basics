console.log("Arrays");

const sayHello = () => {
  console.log("Hello");
};

sayHello();

const sayPotato = () => {
  console.log("Potato");
};

sayPotato();

function executeCallback(callback) {
  console.log("------------------------");
  callback();
  console.log("------------------------");
}

executeCallback(sayHello);
executeCallback(sayPotato);

executeCallback(() => {
  console.log("Hi!");  
});

// Arrays

const numArray = [10, 20, 30, 40];
console.log(numArray);

const countries = ["Spain", "France", "Germany"];
console.log(countries);

const products = [
  {
    name: "computer",
    price: 1000,
    isAvailable: true,
  },
  {
    name: "keyboard",
    price: 50,
    isAvailable: true,
  },
  {
    name: "mouse",
    price: 20,
    isAvailable: false,
  },
];
console.log(products);


// forEach

numArray.forEach((num) => {
  console.log(num);  
})

countries.forEach((country) => {
  console.log(country);  
})

products.forEach((product) => {
  console.log(product);  
})


// map

const doubleNumbers = numArray.map((number) => {
  return number * 2;
})
console.log(doubleNumbers);
console.log(numArray);

const tripleNumbers = numArray.map((number) => number * 3);
console.log(tripleNumbers);

const lowerCountries = countries.map((country) => country.toLowerCase());
console.log(lowerCountries);
console.log(countries);

const productsCopy = structuredClone(products);

const productsWithVAT = productsCopy.map((product) => {
  const updatedPrice = product.price * 1.21;
  product.price = updatedPrice;
  return product;
})
console.log(productsWithVAT);
console.log(products);


// filter

const bigNumbers = numArray.filter((number) => number >= 25);
console.log(bigNumbers);

const filteredCountries = countries.filter((country) => country.charAt(0) === "G");
console.log(filteredCountries);

const availableProducts = products.filter((product) => product.isAvailable);
console.log(availableProducts);


// Reduce

console.log(numArray);

const sumResult = numArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0)
console.log(sumResult);

const countriesConcat = countries.reduce((acc, curr) => {
  return acc + " " + curr;
}, "")
console.log(countriesConcat);

const totalPrice = products.reduce((acc, product) => {
  return acc + product.price;
}, 0)
console.log(totalPrice);


// Sort

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// numbers.sort();

numbers.sort((a, b) => a - b);
console.log(numbers);

countries.sort((a, b) => b.length - a.length);
console.log(countries);

const myProductsCopy = structuredClone(products);
myProductsCopy.sort((a, b) => a.price - b.price);
console.log(myProductsCopy);


// reverse

numArray.reverse();
console.log(numArray);

countries.reverse();
console.log(countries);

products.reverse();
console.log(products);



