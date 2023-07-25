
const express = require("express");

const app = express();

app.get("/", function(req, res) {
   res.send("<h1>Hello, world </h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: tejasviverma@gmail.com")
});

app.get("/about", function(req, res){
    res.send("Hey, there! Im Tejasvi Verma. I own this site.")
});

app.listen(3000, function () {
    console.log("Server started on port 3000.");
}) ;