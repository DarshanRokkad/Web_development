// Change color promise
const changeColor = (color, delay) => {
    return new Promise(                 // returns a Promise object
        (resolve, reject) => {
            setTimeout(
                () => {
                    document.body.style.backgroundColor = color;
                    resolve(`Color changed to ${color}`);
                }, 
                delay
            )
        }
    );
}


// "await keyword" can only be used inside "async functions".
async function rainbow() {
    // change color will return a "Promise Object" and "await keyword" waits until 'returned promise gets resolved' 
    await changeColor('pink', 1000);
    await changeColor('red', 1000);
    await changeColor('yellow', 1000);
    await changeColor('blue', 1000);
    await changeColor('green', 1000);
    await changeColor('orange', 1000);
    await changeColor('voilet', 1000);
    return "END of rainbow";
}

rainbow().then( (msg) => { console.log(msg); } )













// console.log("Demo of async function")

// console.log("demo of promise fullfilled")
// async function hello() {
//     return "hello guys";
// }
// console.log(hello());           // observe output in terminal

// console.log("demo of promise rejected")
// async function bye() {
//     throw new Error("ohh no error occured");
// }
// console.log(bye());            // observe output in terminal