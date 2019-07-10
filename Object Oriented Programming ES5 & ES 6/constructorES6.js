// This is ES6 - OOP. Easier to understand if we coming from background Java, PHP, C or Ruby

class Person {
  // This will take any properties we set
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dateOfBirth);
  }

  // Any method we add inside the class is going to add to the prototype
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  // * Static mathod is to use without instantiating an object
  // * Instantiate is when we create object from a class:
  // * const mary = new Person('Mary', 'Williams', '11-13-1980');

  // TODO: We want to have a method that added two numbers together
  // ! Remember it's not a function, its static method!

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person("Mary", "Williams", "11-13-1980");
mary.getsMarried("Thompson");
console.log(mary.greeting());
console.log(mary.calculateAge());
// console.log(mary.addNumbers(1, 2)); // ! <--- mary.addNumbers is not a function. It's static!
console.log(Person.addNumbers(1, 2));
