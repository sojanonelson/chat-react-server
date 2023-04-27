require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const testRouter = require("./Router/testRouter")
const { Configuration, OpenAIApi } = require("openai");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use("/", testRouter)
const configuration = new Configuration({
  apiKey: process.env.CHATBOT_KEY,
});
const openai = new OpenAIApi(configuration);
app.post("/chat", async (req, res) => {
  console.log("openai response gets successfully")
  const { prompt } = req.body;
  const completion = await openai.createCompletion({
    model: "text-davinci-003", 
    prompt: prompt,
    max_tokens: 500,
  });
  res.send(completion.data.choices[0].text);
});

const PORT = "8000";
app.listen(PORT, () => {
  console.log(`Port running on ${PORT} `);
});
