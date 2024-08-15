function hi()       // This is a function defination
{
    console.log("Hello this is a function.")
}

hi();               // This is function calling


// Q. Find the average of the elements of the array
function findAverage(arr) {
    let sum = 0;
    for (let num of arr) {
        console.log(num)
        sum += num;
    }
    return sum;
}

let array = [2, 5, 6, 8, 1 ,9]
let sum = findAverage(array);
let avg = sum / array.length;
console.log(`Average of array is ${avg.toFixed(3)}`);