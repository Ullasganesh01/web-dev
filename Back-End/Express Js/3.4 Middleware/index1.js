import express from "express";

import { dirname } from "path"; // to access the directory
import { fileURLToPath } from "url";

import bodyParser from "body-parser"; // to parse the body of a request
import morgan from "morgan"; // logging

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandname = "";

app.use(bodyParser.urlencoded({extended: true}));
// app.use(morgan("dev"));
app.use(logger);
app.use(bandnameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // console.log(req.body);
  // let bandname =  req.body.street +" "  + req.body.pet;
  // res.send(`<h2 style="margin-bottom:0px">Your Band Name is</h2> <br/> <h5 style="margin-top:0px">${bandname} ✌️</h5>`);
  res.send(`<h1>Your band name is:</h1><h2>${bandname}✌️</h2>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


function logger(req, res, next){ // my middleware logger
  console.log("Request Method: " + req.method);
  console.log("Request URL: " + req.url);
  next()
}

function bandnameGenerator(req, res, next){
  console.log(req.body);
  bandname = req.body["street"] + req.body["pet"];
  next();
}
