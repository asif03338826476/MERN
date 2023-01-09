const { application, json, urlencoded } = require("express");
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, () => console.log("hello from server"));
