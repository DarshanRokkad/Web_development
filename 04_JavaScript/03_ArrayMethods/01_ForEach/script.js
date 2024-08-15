console.log("for each methods - calls function for each element of the array")

let arr = [2, 3, 4, 5, 6, 7, 8, 9];

// normal functions
arr.forEach(
    function square(n) {
        console.log(n ** 2);
    }
);

// anonyms function
arr.forEach(
    function(n) {
        console.log(n ** 2);
    }
);

// arrow function
arr.forEach(
    (n) => {
        console.log(n ** 2);
    }
);