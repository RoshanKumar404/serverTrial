const express = require("express");
const userRouters = express.Router();

userRouters.post("/signup", (req, res) => {  // Fixed spelling from "singup" to "signup"
    res.send("this is for signup");
    console.log("whst");
});

userRouters.post("/signin", (req, res) => {
    res.send("this is for signin");
});

module.exports = userRouters;
