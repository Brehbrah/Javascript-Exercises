// This string

const name1 = 'Jeff';
const name2 = new String('Jeff');

//name2.foo = 'bar';
//console.log(name2)

console.log(typeof name2)

if (name2 === 'Jeff') {
    console.log('YES!');
} else {
    console.log('NO!')
}

// Numbers
const num1 = 5;
const num2 = new Number(5);

// Boolean 
const bool1 = true;
const bool2 = new Boolean(true);
console.log(typeof bool2)

// Function
const getSum1 = (x, y) => x + y;


const getSum2 = new Function('x', 'y', 'return 1 + 1');
console.log(getSum2(1, 1))

// Object

const john = {
    name: 'John'
}
const john2 = new Object({
    name: 'John'
});

console.log(typeof john)

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);
console.log("Array: ",arr2)

// Regular Expression

const re1 = /\w+/; //This means we are looking for a word character that occurs one or more times
const re2 = new RegExp('\\w+'); // We have to add extra one back-slash to get same result of 're' variable
console.log(re1)