// * Each object in Javascript has a prototype and prototype is an object itself
// * All objects inherit their properties and methods from their prototype

// * Properties are the values associated with a JavaScript object.
// * A JavaScript object is a collection of unordered properties.
// * Properties can usually be changed, added, and deleted, but some are read only.

/*
 * Examples:
 * objectName.property
 * objectName["property"]
 * objectName[expression]
 */

// Dealing with object literals, then you inheriting from a prototype called object.prototype

// object.prototype
// Person.prototype

// * We have a something called prototype chain where you have this Person.prototype (sub prototype),
// * but you can go up to the main object of prototype Object.prototype (main prototype)

function Person(firstName, lastName, dateOfBirth, getFullName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dateOfBirth); // * This will be passed in as a string and want to be date
  /* this.calculateAge = () => {
    // new Date is also an constructor and we put in whatever an arguments
    const different = Date.now() - this.birthday.getTime();
    const ageDate = new Date(different);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }; */
  // This is part of the property, since it's inside the object literals
  this.getFullName = function(getFullName) {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Calculate Age
Person.prototype.calculateAge = function() {
  // new Date is also an constructor and we put in whatever an arguments
  const different = Date.now() - this.birthday.getTime();
  const ageDate = new Date(different);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// ! Get full name - This is not part of the property, since it's prototype
/* Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
} */

// Prototype methods are just geting data and manipulating the data.
// Gets married

// ! This is not stored in an object
Person.prototype.getMarried = function(newLastName) {
  this.lastName = newLastName;
};

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "March 20 1978");

// * The __proto__: represents the Person.prototype
console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getMarried("Smith");
console.log(mary.getFullName());

console.log(mary.hasOwnProperty("firstName"));
// getFullName() is not actual a part of the property, because this is in the prototype
// Not part of it's own property
console.log(mary.hasOwnProperty("getFullName"));
