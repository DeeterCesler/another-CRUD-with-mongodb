const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const appController = require('./controllers/app');

// require our database
require("./db/db");

// middleware
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(methodOverride('_method'));

console.log("server live");

// routing via controller
app.use("/10-12", appController);

app.listen(3000, () => {
    console.log("this bish runnin")
});