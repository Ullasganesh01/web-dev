import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
var items = [];
var workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

function getFormattedDate(){
    let date = new Date();
    // let currentDate = date.getDay();
    // let day = "";
    // switch (currentDate){
    //     case 0 : day = "Sunday"; break;
    //     case 1 : day = "Monday"; break;
    //     case 2 : day = "Tuesday"; break;
    //     case 3 : day = "Wednesday"; break;
    //     case 4 : day = "Thursday"; break;
    //     case 5 : day = "Friday"; break;
    //     case 6 : day = "Saturday"; break;
    //     default : day ="Error Fetching date";
    // }
    var options = { weekday: 'long', day: 'numeric', month: 'short' };
    let formattedDate = date.toLocaleDateString("en-US", options);
    //console.log(formattedDate);
    return formattedDate;    
}

app.get('/', (req, res) => {
    let dateFormat = getFormattedDate();
    res.render('index.ejs',{workTitle : "Normal Routine", curdate : dateFormat,myTodos : items});
});

app.post('/', (req, res) => {

    if(req.body["listType"] === "Work"){
        workItems.push(req.body["todo"]);
        res.redirect('/work');
    }
    else{
        items.push(req.body["todo"]);
        res.redirect('/');
    }
});

app.get('/work', (req, res) => {
    res.render('index.ejs',{workTitle : "Work", curdate : getFormattedDate(),myTodos : workItems});
});

// app.post('/work', (req, res) => {
    
// });

app.listen(port, () => {
    console.log(`To do list website at port ${port}`);
});