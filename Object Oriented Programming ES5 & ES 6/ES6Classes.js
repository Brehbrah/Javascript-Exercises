// We call it synthatic sugar, because it's just how change to write from ES6
// It works same as ES5

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calcAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }
    // Static Method you can use without instantiating an object. 
    // We can use it for stand-alone function or method in our class, then this is a 
    // good choice to use static method
    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'Smith', '11-13-1980'); // When creating an obj. of a class is instantiating
mary.getsMarried('Hoang');

// this is not part of instances. It's a static method
//console.log(mary.addNumbers()); 

console.log(Person.addNumbers(1,2))

console.log(mary.calcAge())