const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

app.get("/users", (req, res) => {
  User.find({}).then((users) => {
    res.send(users)
  }).catch((error) => {
    res.status(500).send()
  })
})

app.get("/users/:id", (req, res) => {
  const _id = req.params.id

  User.findById(_id).then((user) => {
    if (!user) {
      res.status(404).send()
    }
    return res.send(user)

  }).catch((error) => {
    res.status(500).send()
  })

})

app.get("/tasks", (req, res) => {
  Task.find({}).then((task) => {
    res.send(task)
  }).catch((error) => {
    res.status(500).send()
  })
})

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
