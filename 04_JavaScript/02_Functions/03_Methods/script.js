const myMath = {
    PI: 3.14,
    add: function (x, y) {
        console.log(`adding ${x} and ${y}`);
        return x + y;
    },
    multiply(x, y) {                      // this is a short hand
        console.log(`multipling ${x} and ${y}`);
        return x * y;
    }
}

console.log(myMath.PI);
console.log(myMath.add(5,6));
console.log(myMath["multiply"](9, 2));



// "this" keyword

const person = {
    firstName: "Darshan",
    lastName: "Rokkad",
    fullName: function () { return `${this.firstName} ${this.lastName}`; },
    officalName() { return `${this.firstName} ${this.lastName[0]}`; },    // short hand
    reference() { console.log(this); }
};
console.log((person.fullName)());
console.log(person.officalName());

// depends on context

// 1. refers to current object
console.log(person.reference());
// 2. refers to top level "Window" object
let r = person.reference;
console.log(r())