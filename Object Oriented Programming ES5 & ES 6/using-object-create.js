// We can create prototyps inside of a kind parent object, and then have different properties with different prototype methods/functions

const personPrototype = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    },
    getsDivorced: function(oldLastName) {
        this.lastName = oldLastName;
    }
}

console.log('Person Prototype: ', personPrototype)

// Object create will take in our prototypes
const mary = Object.create(personPrototype);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');
console.log('Mary Object Create: ', mary)

console.log(mary.greeting());

const brad = Object.create(personPrototype, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
});

console.log('Brad Object Create',brad);

console.log(brad.greeting())