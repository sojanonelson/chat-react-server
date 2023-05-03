require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const otpRouter = require("./Router/otpRouter");
const bot = require("./Router/botRouter");


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", otpRouter);

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/chat", async (req, res) => {
    // res.send('response from chat ')
    // console.log("openai response gets successfully");
    
    const { prompt } = req.body;
    const completion = await openai.createCompletion({
      model: "text-davinci-003", 
      prompt: prompt,
      max_tokens: 500,
});
    res.send(completion.data.choices[0].text);
    console.log(completion);
  });



app.get("/",function(request,response){
response.send('SERVER10');});

const PORT = "8000";
app.listen(PORT, () => {
  console.log(`Port running on ${PORT} `);
});
