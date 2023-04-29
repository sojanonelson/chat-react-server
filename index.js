require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const testRouter = require("./Router/testRouter")
const { Configuration, OpenAIApi } = require("openai");

const app = express();


app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });
app.use(bodyParser.json());
app.use("/", testRouter)

app.get("/",function(request,response){
  response.send('SERVER');});


const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
app.post("/chat", async (req, res) => {
  console.log("openai response gets successfully")
  const { prompt } = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003", 
    prompt: prompt,
    max_tokens: 500,
  }).catch(error => { throw error});
  res.send(completion.data.choices[0].text);
});

const PORT = "8000";
app.listen(PORT, () => {
  console.log(`Port running on ${PORT} `);
});
