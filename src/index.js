const express = require("express");
const app = express();
const quotes = require("./quotes.json");
const userRouters = require("./routes/userRoutes.js");

app.use("/users", userRouters);

app.get("/", (req, res) => {
    res.send("hello");
    // console.log(res.send);
    // console.log(req);
});

app.get("/nextfolder", (req, res) => {  // Fixed order of req and res
    res.send("we are in the secondary");
});

app.get("/randomQuote", (req, res) => {  // Fixed the spelling from "randomQote" to "randomQuote"
    let index = Math.floor(Math.random() * quotes.length);
    let randomquotes = quotes[index];
    res.status(200).json(randomquotes);
});

app.listen(3000, () => {
    console.log("Server has started on port number 3000");
});
