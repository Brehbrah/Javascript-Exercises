// Prototype Inheritance.
// If we want to have one object, or one object type inherit from another
// TODO: We want to create a Person object, and then have a customer object that will inherit it's prototype

// * Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const p1 = new Person("John", "Doe");
console.log(p1.greeting());

// TODO: Create a constructor for customer
function Customer(firstName, lastName, phone, membership) {
  // Call is a function that allows us to call another function from somewhere else in the current context
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// TODO: Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// TODO: Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create Customer
const c1 = new Customer("Tom", "Smith", "555-555-5555", "standard");

console.log(c1);

// TODO: If we want to create seperate greeting for customer
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}
    Welcome to our company`;
};

console.log(c1.greeting());
