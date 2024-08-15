// arrow function
const hello = () => { console.log("hello every one"); };      // with 0 parameters
hello();

const square1 = x => { return x * x; };                       // with 1 parameters
console.log(square1(5));

const add1 = (a, b) => { return a + b; };                     // with 2 parameters
console.log(add1(5, 1));




// arrow function with implict return
const square2 = x => (x * x);
console.log(square2(5));

const add2 = (a, b) => (a + b);
console.log(add2(5, 8));