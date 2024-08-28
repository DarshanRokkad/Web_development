const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "ejs");                         // we are setting app view engine to ejs
app.set("views", path.join(__dirname, "/views"));

// "https://localhost:3000"
app.get(
    "/",
    (req, res) => {
        res.render("home");             // render the "home.ejs" file present in the "views" folder
    }
);

// passing value to ejs file from js file -> "https://localhost:3000/rand"
app.get(
    "/rand",
    (req, res) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const cats = ["Belly", "meely", "gunty"];
        res.render("random_num", { randNum: randomNumber, Allcats: cats });
    }
);


app.listen(3000, () => { console.log("Listening to port 3000") });