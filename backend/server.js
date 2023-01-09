const { application } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.listen(port, () => console.log("hello from server"));
