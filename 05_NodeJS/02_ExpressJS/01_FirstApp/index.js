const express = require("express");
const app = express();

let numberOfRequest = 0;
app.use(
    // the below are request object and response object
    // using request object we can get the data sent from user
    // using response object we can respond to the request send from the user
    (req, res) => {
        numberOfRequest += 1;
        console.log(`We got request ${numberOfRequest}`);

        res.send("<h1>Hello World</h1>");
        // res.send("{name : 'Darshan'}");
    }
)

app.listen(
    3000, () => {
        console.log("Listening to port 3000");
    }
)