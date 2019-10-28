// When doing Object literals, then you are inherting fro a prototype called "Object.prototype"

// ! Object.prototype
// Person.prototype

// You have something called prototype chain

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName
    this.birthday = new Date(dob);
    /* this.calcAge = () => {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    } */
}

// Calculcate age - This we want to chain
Person.prototype.calcAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// Get Fullname

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary)
console.log(john.calcAge())

console.log('Get Full Name: ', mary.getFullName())
mary.getsMarried('Smith');

console.log('New last Name: ', mary.getFullName())

// We can use in-built property that exist from the prototype-chain
console.log(mary.hasOwnProperty('firstName'))
// This will get false, because this is inside a prototype. Not part of it's own property
console.log(mary.hasOwnProperty('getFullName'))