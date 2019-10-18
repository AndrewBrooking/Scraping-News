// Imports
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

// Define constants from env and default values
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Initiatize express
const app = express();

// Connect to MongoDB
mongoose.connect(MONGODB_URI);

// Set up express
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// Set up Handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

require("./models");

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});