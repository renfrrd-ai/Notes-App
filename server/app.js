const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./server/.env" });
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 5040;
const app = express();
const notesRoutes = require("./routes/notes");
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/notes", notesRoutes);
app.use("/me", dashboardRoutes);

app.listen(port, (err) => {
  if (err) console.log(err);
  else {
    console.log(`Server is running on port ${port}`);
  }
});
