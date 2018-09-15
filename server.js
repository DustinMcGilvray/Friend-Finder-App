// Requiring Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Establishing the Express Server
var app = express()
var PORT = process.env.PORT || 3000;

// Setting up Express to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Allows use of CSS files
app.use(express.static('app/public'));

// Requiring files for html and api routes
require("./app/routing/htmlRoutes")(app);

require("./app/routing/apiRoutes")(app);

//Start-up Server and begin Listening for changes
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});