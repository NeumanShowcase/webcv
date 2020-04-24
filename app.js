const express = require("express");
const path = require("path");
const expressHandlebars = require('express-handlebars')
const app = express();
const port = process.env.PORT || "8000";


app.set("views", __dirname + "/pl/views")

app.engine('.hbs', expressHandlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.get("/", (req, res) => {
    res.render("lang.hbs", {} );
});

app.get("/en", (req, res) => {

    model = {
        "About": {
            "Adress": "Karrhoksgatan 80 1005, 55612 Jonkoping",
            "Email": "oskar.neuman@gmail.com",
            "Phone": +46764284858,
            "Age": 31,
            "Desc": "Hi! I'm a software engineer currently located in Sweden. I have made this page (adapted this bootstrap template) to combine an introduction of me as a person with a summary of my skillset and to present some of my previous work. Find out more below."
        },
        "Infospread":{
            Img: "img/infospread.png",
            Title: "Infospread Euro AB",
            Timespan: "March 2018 - December 2019",
            Desc: "I worked for Infospread during the last year of my engineering studies, this partnership led to several developed software products in different fields of software and IT."
        },
        "Education":{
            "JU":{
                Img: "img/JU.png",
                Title: "Jönköping University",
                Timespan: "2017 - 2019",
                Degree: "Bachelor in computer science"
            }
        }
    }


    res.render("home.hbs", model );
});

app.get("/sv", (req, res) => {

    model = {
        "About": {
            "Adress": "Kärrhöksgatan 80 1005, 55612 Jönköping",
            "Email": "oskar.neuman@gmail.com",
            "Phone": +46764284858,
            "Age": 31,
            "Desc": "Hej! Jag är en mjukvaruutvecklare som bor i Jönköping. Denna sida är sammansatt med syftet att kombinera information om mig som person med en samanställning av mina tidigare arbeten. Läs mer nedan om du är intresserad."
        },
        "Infospread":{
            Img: "img/infospread.png",
            Title: "Infospread Euro AB",
            Timespan: "Mars 2018 - December 2019",
            Desc: "Jag arbetade senast på Infospread där min roll var att konstruera mjukvara och efterforska produktlönsingar som ämnade förbättra produkten 'Mobitime'. Detta samarbete resulterade i flertalet utvecklade mjukvaror på flera områden av IT."
        }
    }


    res.render("home.hbs", model );
});



app.use(express.static('public'))
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});