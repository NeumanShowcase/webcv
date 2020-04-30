// Set up constants and variables
const express = require("express");
const expressHandlebars = require('express-handlebars')
var favicon = require('serve-favicon');

const app = express();
const port = process.env.PORT || "8000";

// Import language data
const englishData = require("./data/english_lang.json")
const swedishData = require("./data/swedish_lang.json")


// Set up handlebars
app.set("views", __dirname + "/pl/views")
app.engine('.hbs', expressHandlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');


// Routes 
app.get("/", (req, res) => {

// Determine language by query
  switch (req.query.lang) {
    case 'en':
      model = englishData;
      res.render("home.hbs", model);
      break;
    case 'sv':
      model = swedishData;
      res.render("home.hbs", model);
      break;
    default:
      res.render("lang.hbs", { hidenav: true, layout: 'main.hbs' });
  }
});

app.use(express.static('public'))
app.use(favicon(__dirname + '/public/img/favicon-32x32.png'));
app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});