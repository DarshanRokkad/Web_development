console.log("Map - create a new array with result of calling callback function on each element of the array")

let arr = [2, 6, 8, 12, 5, 16, 9];

let cube_array = arr.map(
    // function cube (n) { return n**3; }
    // function (n) { return n ** 3; }
    // (n) => { return n ** 3; }
    n => ( n**3 )
);

for (let num of cube_array) {
    console.log(num);
}