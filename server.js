// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//creates express server and sets up a port
var app = express(); 
var port = process.env.PORT || 3000; 

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Static files
// needs to be called before the routes in order to work
app.use(express.static('app/public'));


//Routing rules
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);