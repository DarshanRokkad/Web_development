let fruits = ['apple', 'mango', 'banana', 'pineapple', 'guva'];

console.log('"for of loop" - gives the elements of the array');
for (let fruit of fruits) {
    console.log(fruit);
}


console.log('\n"for in loop" - gives the index of the array');
for (let index in fruits) {
    console.log(index);
    // console.log(fruits[index]);
}


console.log('\nExample use case of "for of" loop');
let names = [
    ['ram', 'sita', 'lakshman'],
    ['hi', 'hello'],
    ['welcome', 'rama']
]

for (let row of names) {
    for (let name of row) {
        console.log(name);
    }
}