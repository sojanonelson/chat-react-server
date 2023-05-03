// const app = require("express").Router();
// const bodyParser = require("body-parser");
// const { Configuration, OpenAIApi } = require("openai");
// app.use(bodyParser.json());

// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

// app.post("/chat", async (req, res) => {
//     response.send('response from chat ')
//     console.log("openai response gets successfully");
    
//     const { prompt } = req.body;
//     const completion = await openai.createCompletion({
//       model: "text-davinci-003", 
//       prompt: prompt,
//       max_tokens: 500,
// });
//     res.send(completion.data.choices[0].text);
    
//   });

// module.exports = app;
  
  