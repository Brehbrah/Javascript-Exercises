// inheritance in ES6 classes, better known as sub classes
// We can create for instance a Person class and then create a subclass called customer or whatever
// and then we can extend the Person class

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "555-555-5555", "Standard");

console.log(john);
console.log(john.greeting());

console.log("Price:", Customer.getMembershipCost());
