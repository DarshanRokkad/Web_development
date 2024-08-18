
// This is our 'own fake request promise' which will return the promise object
function fakeRequestPromise(url) {
    return new Promise(
        (resolve, reject) => {
            const delay = Math.floor(Math.random() * 4500) + 1;
            setTimeout(
                () => {
                    if (delay > 4000) {
                        reject("Failed..... Request Timeout");    // calling failure callback function
                    }
                    else {
                        resolve("Success! Data got");             // calling success callback function
                    }
                },
                delay
            )
        }
    )
}


// making use of promise
// calls the "fakeRequestPromise" which returns the "promise object" for which we further "attach callbacks". 
fakeRequestPromise("yelp.com/api/page1")
    .then(
        (success) => {
            console.log(success);
            return fakeRequestPromise("yelp.com/api/page2");           // requesting data of next page i.e page 2
        }
    )
    .then(
        (success) => {
            console.log(success);
            return fakeRequestPromise("yelp.com/api/page3");           // requesting data of page 3
        }
    )
    .catch(
        (failed) => {
            console.log(failed);
        }
    )