// ! There is other core objects that have constructor, and it's not advisable to use
// ! e.g. instance primitive types like string, numbers and booleans.
// ! They can be created as an obj. instead of primitives, but doing certain constructor such as
// ! string and numbers etc.
// ! We don't want to use this, because it slows down execution speed, more code and it's confusing
// ! and we will get issues when using triple equal operators by trying to compare the value
// ! to the value and the type
// ! We are not going to use it a lot, but we will not leave it out, because you may run into it

// * String

const name1 = "Jeff"; // This will be a primitive value
const name2 = new String("Jeff"); // This will be string as an object

name2.foo = "bar"; // ! You can use this code, but there will be a problem

console.log(name1);
console.log(name2);
console.log(typeof name1); // This will give a string
console.log(typeof name2); // This will give an object, even it is a new String()

if (name1 === "Jeff") {
  console.log("YES");
} else {
  console.log("NO!");
}

if (name2 === "Jeff") {
  console.log("YES");
} else {
  console.log("NO!");
}

// Number
const num1 = 5;
const num2 = new Number(5);
console.log(num2);
console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool2);
console.log(typeof bool2);

// Function
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1 + 1");

console.log(getSum1(1, 1));
console.log(getSum2(1, 1));

// Objects

const john1 = { name: "John" }; // This one is easier compared to the below
const john2 = new Object({ name: "John" }); // this one is more to code
console.log(john1);
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr1);
console.log(arr2);

// Regular Expressions
// * /\ represents a word character
// * /\w+/ the plus means we are looking for word that is one or more times
const re1 = /\w+/;

// * When using regEXP(), you have to escape your character \, so solution is to add / to get the /
const re2 = new RegExp("/w+");

console.log(re1);
console.log(re2);
