// * This is an alternative way to create object using this object create method

// * We want to use object.create. We are going to be able to create prototype
// * inside of a kind of a parent object and then have different
// * properties with different prototype methods, or different prototype functions

// TODO: Create a variable called Person prototype
const personPrototypes = {
  greeting: function() {
    return `Hello There ${this.firstName} ${this.lastName}`;
  },
  // TODO: Add another prototype method
  getMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

// Object.create() will take in our prototype
const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;
mary.getMarried("Thompson");

console.log(mary);

// This is an easy way to do it, but we are not using constructor hardcore inheritance and stuff like that,
console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  // Second param. is an object
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
  age: { value: 36 }
});

console.log(brad);
console.log(brad.greeting());
