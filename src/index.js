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


const main = async () => {
  const task = await Task.findById('5cb5ce3c7a870e1d7c6f4bc4')
  await task.populate('owner').execPopulate()
  console.log(task.owner)

  const user = await User.findById('5ca610f5166a1d2f280d8805')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()