const path = require("path");
const express = require("express");
const app = express();
const redditData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// "https://localhost:3000"
app.get("/", (req, res) => {
  res.render("home");
});

// "https://localhost:3000/r/scorer"
app.get("/r/:subreddit", (req, res) => {
  const { subreddit: topic } = req.params;                // const topic = req.params["subreddit"]
  const data = redditData[topic];
  if (data) {
    res.render("reddit", { ...data });
  } else {
    res.render("home");
  }
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});