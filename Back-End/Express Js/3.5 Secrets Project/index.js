//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
//import bodyParser from 'body-parser'; can use express.urlencoded 
import { dirname } from "path"; // to access the directory
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var userIsAuthorized = false;

app.use(express.urlencoded({extended: true}));

function checkPassword(req, res, next) {
    const password = req.body["password"];
    if(password === "ILoveProgramming"){
        userIsAuthorized = true;
    }
    next();
}

app.use(checkPassword);



app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', (req,res) =>{
    // if(req.body["password"] === "ILoveProgramming" ){
    //     res.sendFile(__dirname + '/public/secret.html');
    // }
    // console.log(`Password : ${req.body.password}`);
    if(userIsAuthorized){
        res.sendFile(__dirname + '/public/secret.html');
    }else{
        res.redirect("/");
    }
});


app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});

