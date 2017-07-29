//dependencies
var express = require("express");
var bodyParser = require("body-parser");

//config
var app = express();

//port
var PORT = process.env.PORT || 2207;

//attach body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

//define the routes available to app
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start server
app.listen(PORT, function() {
    console.log("Way to go! App listening on PORT: " + PORT);
});