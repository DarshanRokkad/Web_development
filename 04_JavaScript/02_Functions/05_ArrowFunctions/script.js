// arrow function
const hello = () => { console.log("hello every one"); };      // with 0 parameters
hello();

const square1 = x => { return x * x; };                       // with 1 parameters
console.log(square1(5));

const add1 = (a, b) => { return a + b; };                     // with 2 parameters
console.log(add1(5, 1));




// arrow function with implict return
const square2 = x => (x * x);                        // only round brackets
const square3 = x => x * x;         // one liner arrow function with implict return 
console.log(square2(5));

const add2 = (a, b) => (a + b);
console.log(add2(5, 8));




// example - print all the movie with there rating
movies = [
    {
        title: "pailwon",
        marks: 94
    },
    {
        title: "hebulli",
        marks: 85
    }
]

// let print = movies.map(
//     function (movie) { return `${movie.title} -> ${movie.marks / 10}`; }
// )
let print = movies.map(movie => `${movie.title} -> ${movie.marks / 10}`);        // one liner
console.log(print);