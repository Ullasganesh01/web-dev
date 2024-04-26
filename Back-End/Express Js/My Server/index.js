import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //console.log(req.rawHeaders);
    res.send('<h1>Hello <i> World!</i></h1> <a href="home">Home</a>');
});

app.get('/home', (req, res) => {
    res.send('<h2>Home Page </h2>');
});

app.get('/contact', (req, res) => {
    res.send('<h4>Contact Number : <i>9113613238</i> </h4>');
});

app.post('/register', (req, res) => {
    res.sendStatus(201);
});

app.put('/user/ullas', (req, res) => {
    res.sendStatus(200);
});

app.patch('/user/ullas', (req, res) => {
    res.sendStatus(200);
});

app.delete('/user/ullas', (req, res) => {
    res.sendStatus(200);
});


app.listen(port,() => {
    console.log(`listening on my server port ${port}`);
});