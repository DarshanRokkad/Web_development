// axios
//     .get("https://swapi.dev/api/people/1")
//     .then(
//         (responseHeader) => {
//             console.log(responseHeader.data);
//         }
//     )
//     .catch(
//         (error) => {
//             console.log("Failed to fetch the data!...");
//         }
//     )




// use of async function + await keyword -> to fetch N person data uisng axios external library
const getData = async (baseURL, n) => {
    try {
        for (let i = 1; i <= n; i++){
            const url = `${baseURL}${i}`;
            const responseHeader = await axios.get(url);
            console.log(responseHeader);
            console.log(responseHeader.data);               // data is already present in json format no need to convert to json as like fetch
            console.log("------------");
        }        
    }
    catch (error) {
        console.log("Failed to fetch the data!...");
    }
}

getData("https://swapi.dev/api/people/", 5);