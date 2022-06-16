require('express-async-errors');
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const error = require("./middlewares/error.js");

const userRouter = require('./api/routers/userRouter');



app.use(express.json());
app.use(cors());

app.use('/api/user/', userRouter)

app.use(error);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

module.exports = app;
