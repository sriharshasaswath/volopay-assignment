const express = require("express");
const data = require("./data");
const app = express();

const port = process.env.PORT || 4000;

app.use("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const filters = req.query;
  const filteredCards = data.filter((user) => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredCards);
});

app.listen(port, () => {
  console.log(`App listining to port ${port}`);
});
