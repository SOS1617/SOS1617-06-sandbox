var exports = module.exports = {};

exports.log = function(msg) {
    console.log(msg);
}

exports.register = function (app) {
    app.get("/module", (req, res) => {
        res.send("Modularized");
    });
}
