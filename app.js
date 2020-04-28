// Set up constants
const express = require("express");
const expressHandlebars = require('express-handlebars')

const app = express();
const port = process.env.PORT || "8000";

// Import language data
const englishData = require("./data/english_lang.json")
const swedishData = require("./data/swedish_lang.json")
var favicon = require('serve-favicon');

// Set up handlebars
app.set("views", __dirname + "/pl/views")
app.engine('.hbs', expressHandlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');


// Routes

// Route for undetermined language
app.get("/", (req, res) => {
    res.render("lang.hbs", {});
});
// English route
app.get("/en", (req, res) => {
    model = englishData;
    res.render("home.hbs", model);
});
// Swedish route
app.get("/sv", (req, res) => {
    model = swedishData;
    res.render("home.hbs", model);
});



app.use(express.static('public'))
app.use(favicon(__dirname + '/public/img/favicon-32x32.png'));
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});