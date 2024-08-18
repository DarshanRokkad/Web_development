// Change color promise
const changeColor = (color, delay) => {
    return new Promise(                 // returns a Promise object
        (resolve, reject) => {
            setTimeout(
                () => {
                    if (delay > 3000) {
                        reject("Delay more color can't be changed!..");
                    }
                    else {
                        document.body.style.backgroundColor = color;
                        resolve(`Color changed to ${color}`);
                    }
                }, 
                delay
            )
        }
    );
}


// Using of promises - we attach callback functions to the promises
changeColor("red", 1000)                            // returns a promise
    .then(
        (success) => {                              // this is a callback function for success
            console.log(success);
            return changeColor("blue", 1000);
        }
    )
    .then(
        (success) => {
            console.log(success);
            return changeColor("yellow", 1000);
        }
    )
    .then(
        (success) => {
            console.log(success);
            return changeColor("green", 1000);
        }
    )
    .then(
        (success) => {
            console.log(success);
            return changeColor("orange", 1000);
        }
    )
    .then(
        (success) => {
            console.log(success);
        }
    )
    .catch(
        (error) => {                              // this is a callback function for failure
            console.log(error);
        }
    )