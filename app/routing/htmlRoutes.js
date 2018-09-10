//Requiring Dependencies
var path = require("path");

module.exports = function (app) {

    app.get("/", function (require, response) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (require, response) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

}