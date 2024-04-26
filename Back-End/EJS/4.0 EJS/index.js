import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {

    //const today = new Date("March 2, 2024");
    const today = new Date();
    const day = today.getDay();

    let type = 'a weekday';
    let adv = "it's time to work hard";

    if(day === 0 || day===6){
        type ="the weekend";
        adv = "its time to some some fun";
    }


    res.render("index.ejs",{
        dayType:type,
        advice:adv,
    })
});

app.listen(port , () => {
    console.log(`listening on port ${port}`);
});

// function getCurrentDay(){
//     let day = new Date();
//     return day  
// }

// function getDayType(){
//     let day = getCurrentDay();
//     if(day.getDay()<5){
//         return "weekday";
//     }else{
//         return "weekend";
//     }
// }

// function getAdvice(){
//     let day = getCurrentDay();
//     if(day.getDay()<5){
//         return "Its time to work hard";
//     }else{
//         return "Lets Party";
//     }
// }