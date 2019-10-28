// const sayHello = () => console.log('Hello!');

// ! This will get undefined, because it looking at the function as body. Not Obj. literal
// const sayHello = () => {msg: 'Hello'}

// ! To fix this, you have to wrap it with paranthesis to return as an object
const sayHello = () => ({msg: 'Hello'});

const salute = (firstName, lastName) => `Salute ${firstName} ${lastName}`;


console.log(salute('Brad Traversy'));

const users = ['Nathan', 'John', 'William'];

// map returns an array with different things such as length. 
// We use map if we want to manipulate the data
/* const nameLengths = users.map((name) => {
    return name.length;
});
 */
const nameLengths = users.map(name => name.length)

console.log(nameLengths)