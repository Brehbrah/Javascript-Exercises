// Person constructor
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calcAge = () => {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// Using 'this' will pertain to the window object. You can see it on the browser
// and it has lots of different kind of functions
// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

const brad = new Person('Brad', '9-10-1980');
console.log("Age: ", brad.calcAge())

 
