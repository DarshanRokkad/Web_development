// fetch("https://swapi.dev/api/people/1/")
//     .then(
//         (responseHeader) => {
//             console.log(responseHeader);                            // header don't contain the data
//             console.log("First request resolved.");
//             return responseHeader.json();                           // returns json format data in the form of promises
//         }
//     )
//     .then(
//         (data) => {
//             console.log(data);
//             return fetch("https://swapi.dev/api/people/2/");        // fetching next person data this returns promise that will be resolved by next then block
//         }
//     )
//     .then(
//         (responseHeader) => {
//             console.log("Second request resolved.");
//             return responseHeader.json();
//         }
//     )
//     .then(
//         (data) => {
//             console.log(data);
//         }
//     )
//     .catch(
//         (error) => {
//             console.log("Failed to fetch the data!..");
//             console.log(error);
//         }
//     )




// use of async function + await keyword -> to fetch N person data
const getData = async (baseURL, n) => {
    try {                                                       // if promise get rejected then it will be caught by catch block
        for (let i = 1; i <= n; i++){
            const url = `${baseURL}${i}`;
            const responseHeader = await fetch(url);            // waits until promise get resolved
            const data = await responseHeader.json();
            console.log(data);        
        }        
    }
    catch (error) {
        console.log("Failed to fetch the data!...");
        console.log(error);
    }
}

getData("https://swapi.dev/api/people/", 5);