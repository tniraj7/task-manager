const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const userRouter = require('./routers/user-routers')
const taskRouter = require('./routers/task-router')

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log("Server is listening on port " + port);
})
