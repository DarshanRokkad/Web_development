console.log("Filter - create a new array with all the element that satisifies the condition present within the function");

let arr = [2, 6, 8, 12, 5, 16, 9];

let odds = arr.filter(
    (num) => { return num % 2 === 1; }
);

console.log(odds);



// some and every
console.log("\n Demo of 'some' and 'every' methods..."); 

let array = [2, "hello", 4, 5];

console.log("Are all the elements in array are of type 'number'?..");
console.log(
    array.every( num => { return typeof num === 'number'; } )
);

console.log("Is there any element in array of type 'number'?..");
console.log(
    array.some( num => { return typeof num === 'number'; } )
);
