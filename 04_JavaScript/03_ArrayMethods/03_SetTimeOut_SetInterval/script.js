console.log("Hello welcome!..");

// calls callback function after 3 seconds
setTimeout(
    () => {
        console.log("Are you still there!..");
    },
    3000           // 3 second delay
);

// calls callback function every 2 seconds
const id = setInterval(
    () => {
        console.log("Every 2 second.");
    },
    2000           // 2 second delay
);
clearInterval(id);    // used to stop the setInterval

console.log("Good Bye!..");