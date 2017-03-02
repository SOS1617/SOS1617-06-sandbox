var express = require("express");
var path = require("path");

var app = express();
var port = (process.env.PORT || 16778);

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("¡Hola!")
});

app.listen(port, () => {
    console.log("Magic is happening in port " + port)
}).on("error", (msg) => {
    console.log("Server can not be started: " + msg);
    process.exit(1);
});
