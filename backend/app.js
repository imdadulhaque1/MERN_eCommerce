const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const userRouter = require('./api/routers/userRouter');


app.use(express.json());
app.use(cors());

app.use('api/user/', userRouter)


if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

module.exports = app;
