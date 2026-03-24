const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./server/.env" });

const port = process.env.PORT || 5040;
const app = express();
const notesRoutes = require("./routes/notes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", notesRoutes);

app.listen(port, (err) => {
  if (err) console.log(err);
  else {
    console.log(`Server is running on port ${port}`);
  }
});
