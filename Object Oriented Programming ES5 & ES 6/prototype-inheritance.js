// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Simple prototype Greeting
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const p1 = new Person('John', 'Doe');
console.log(p1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
    // call() is a function that allows us to call another function from somewhere else context 
    Person.call(this, firstName, lastName); 
    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer 
const c1 = new Customer('Tom', 'Smith', '555-555-5555', 'standard');
console.log(c1);

// Customer greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} Welcome to our company!`;
}

console.log(c1.greeting());
