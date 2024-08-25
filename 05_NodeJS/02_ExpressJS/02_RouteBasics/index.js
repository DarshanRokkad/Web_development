// Create 2 routes and handle the request
// both "get" and "post" request are different and behaves different

const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("This is home page route (default route)");
})

// "get" request
app.get("/predict", (req, res) => {
    res.send("This is predict route.");
})

// "post" request 
app.post("/predict", (req, res) => {
    res.send("This is predict route 'post' request.");
})

app.get('*', (req, res) => {
    res.send("Your requested route is not present!..........");
})


app.listen(8000, () => {
    console.log("Listening to port 8000");
})