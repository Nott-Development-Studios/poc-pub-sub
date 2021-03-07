const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");
const { publishMessage } = require("./sendMessage");

// set session variable to the gcp-data.json file.
// get file path using ```realpath file.json```
// export GOOGLE_APPLICATION_CREDENTIALS="/Users/robert.moritz/Documents/poc-pub-sub/api/gcp-data.json"

const app = express();
const port = 4000;
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  const id = uuid();
  publishMessage(id);
  res.send({ message: "Hello world!", id });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
