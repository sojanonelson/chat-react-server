const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const testRouter = require("./Router/testRouter");
const router = require("express").Router();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use("/", testRouter)

router.post("/mobile", (req, res) => {
  console.log("number", req.body.number);
  client.verify
    .services(serviceSID)
    .verifications.create({
      to: `+91${req.body.number}`,
      channel: "sms",
    })
    .then((resp) => {
      console.log("response", resp);
      res.status(200).json(resp);
    });
});

const PORT = "8000";
app.listen(PORT, () => {
  console.log(`Port running on ${PORT} `);
});
