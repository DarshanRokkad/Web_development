// url -> "https://api.tvmaze.com/search/shows?q=girls"

const form = document.querySelector("#searchForm");

form.addEventListener(
    "submit", async (event) => {
        event.preventDefault();
        console.log("Input Submitted!...");
        const inputQuery = form.elements.query;        
        const movieTitle = inputQuery.value;
        
        try {
            // approach 1 - custom url
            const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${movieTitle}`);
            
            // approach 2 - query string
            // const url = "https://api.tvmaze.com/search/shows";
            // const config = { params: { q: movieTitle } };
            // const response = await axios.get(url, config);
            
            console.log(response);
            makeImages(response.data);
        }
        catch (error) {
            console.log("Failed to fetch the data!..");
            console.log(error);
        }

        inputQuery.value = "";
    }
)

let makeImages = (data) => {
    for (let result of data) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}