const express = require("express");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.listen(port, (err) => {
  if (err) console.log(err);
  else {
    console.log(`Server is running on port ${port}`);
  }
});
