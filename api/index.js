const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");
const { publishMessage } = require("./sendMessage");

require("dotenv").config();

const app = express();
const port = 4000;
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  const id = uuid();
  const publish = await publishMessage(id);
  res.send({ response: publish, id });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
