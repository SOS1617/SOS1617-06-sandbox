var cool = require("cool-ascii-faces");
var express = require("express");

var port = process.env.PORT;

var app = express();

app.get("/", (req, res) => {
    res.send("<html><body><h1>" + cool() + "</h1></body></html>");
});

app.listen(port, (err) => {
    if (!err)
        console.log("Server initialized on port " + port);
    else
        console.log("ERROR initializing server on port " + port + ":" + err);
});

console.log("---------------------------------");
//console.log("Server initialized on port " + port)
