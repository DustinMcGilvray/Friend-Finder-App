//Requiring Dependencies
var path = require("path");

module.exports = function (app) {
// Route for Home Page
    app.get("/", function (require, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

// Route for Survey Page
    app.get("/survey", function (require, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

// // catch-all
//     app.get("*", function (req, res) {
//         res.sendFile(path.join(__dirname, "../public/home.html"));
//     });

}