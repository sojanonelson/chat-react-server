require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const testRouter = require("./Router/testRouter")
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use("/", testRouter)

app.get("/",function(request,response){
  response.send('SERVER');});


const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
app.post("/chat", async (req, res, next) => {
   headers: {
              'Content-Type': 'application/json',
},
  console.log("openai response gets successfully")
  const { prompt } = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003", 
    prompt: prompt,
    max_tokens: 500,
  })
  res.send(completion.data.choices[0].text);
});

const PORT = "8000";
app.listen(PORT, () => {
  console.log(`Port running on ${PORT} `);
});
