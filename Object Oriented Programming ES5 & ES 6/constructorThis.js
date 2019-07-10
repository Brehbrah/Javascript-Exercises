// This is fine if you want to deal with one object, or one instance

const bradObj = {
  name: "Brad",
  age: 30
};

console.log(bradObj);
console.log(bradObj.age);

/*
 * If you want to create multiple instances of certain type of object, then you are going to want to
 * create a constructor.
 * If you want to get into prototypes and inheritance, then we have to learn constructors
 * The 'this' keyword will represent the current instance of the object of we want to use
 */

// Person Constructor
// ! This is hardcoded, since we added a name
function Person() {
  this.name = "Brad";
}

// ! This is how we wish to add an argument in order to init. input to the constructor
function PersonTwo(name, age, dateOfBirth) {
  this.name = name;
  this.age = age;
  this.birthday = new Date(dateOfBirth); // * This will be passed in as a string and want to be date
  this.calculateAge = () => {
      // new Date is also an constructor and we put in whatever an arguments 
    const different = Date.now() - this.birthday.getTime();
    const ageDate = new Date(different);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// * This below is to instantiate an object
/* 
const brad = new Person();
const john = new PersonTwo('John');

console.log(this); // * 'This' will pertain to the window object
console.log(brad)
console.log('John', 36);
 */

const p = new PersonTwo("Brad", 30, "9-10-1981");
console.log(p);
console.log(p.calculateAge());
