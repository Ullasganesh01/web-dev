import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "ullasganesh";
const yourPassword = "ullasrono";
const yourAPIKey = "9400475c-f333-487c-9509-52d8424f6fa2";
const yourBearerToken = "f58a9612-f8b1-4a3e-a85a-13ec1ff207b3";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth",async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
    const result = await axios.get(API_URL+"/random");
    res.render("index.ejs",{content:JSON.stringify(result.data)});
  }catch(e){
    res.status(404).send(e.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  
  try{
    const result = await axios.get(API_URL+"/all?page=2",{
      auth:{
        username : yourUsername,
        password : yourPassword,
      },
    });
    res.render("index.ejs",{content:JSON.stringify(result.data)});
  }catch(e){
    res.status(404).send(e.message);
  }
  //  axios.get(URL, {
  //     auth: {
  //       username: "abc",
  //       password: "123",
  //     },
  //   });
  
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{
    const result = await axios.get(API_URL+"/filter",{
      params : {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs",{content:JSON.stringify(result.data)});
  }catch(e){
    res.status(404).send("Error: " + e.message);
  }
});

const config = {
  headers : { Authorization : `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken",async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */

  try{
    const result = await axios.get(API_URL+"/secrets/2",config);
    res.render("index.ejs",{content:JSON.stringify(result.data)});
  }catch(e){
    res.status(404).send("Error :" +e.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
