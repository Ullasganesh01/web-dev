/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
// const fs = require("fs");
//var qr = require('qr-image');

inquirer.prompt([{
    message:"Type in ur URL:",
    name:"URL"
}])
.then((answers) => {
    //console.log(answers);
    const url = answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr1.png'));

    fs.writeFile("myurl.txt",url,(err) => {
        if (err) throw err;
        console.log("The url has been saved!");
    });
})
.catch((err) => {
    if (err.isTtyError){

    }else{

    }
});



 

 
//var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
