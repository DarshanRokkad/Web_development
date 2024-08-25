const express = require("express");
const app = express();


// parameters -> "http://localhost:8000/r/helloguys"
// ex: "https://reddit/r/LordRama"
app.get(
    "/r/:subreddit",
    (req, res) => {
        const { subreddit } = req.params;      // destructuring
        res.send(`<h1>The parameter is "${subreddit}"</h1>`);
    }
)


// query string -> "http://localhost:8000/search?q=dogs&color=brown"
// ex: "https://google.com/search?q=dogs&color=red"
app.get(
    "/search",
    (req, res) => {
        const { q, color } = req.query;
        res.send(`<h1>The query string given is "${q} ${color}"</h1>`);
    }
)


app.listen(8000, () => { console.log("Listening to port 8000") });