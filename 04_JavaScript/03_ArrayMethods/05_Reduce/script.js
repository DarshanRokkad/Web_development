console.log("Reduce - return a 'single value' after executing reducer function of each element of the array");

let array = [3, 6, 1, 8, 2];
console.log(array);

let sum = array.reduce(
    (accumulator, currentValue) => {
        return accumulator + currentValue;
    }
);
console.log(`Sum of all the elements of the array is ${sum}.`)

let product = array.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(`Product of all the elements of the array is ${product}.`)

let max_value = array.reduce((max_value, current_value) => Math.max(max_value, current_value));
console.log(`Maximum number of the array is ${max_value}`);