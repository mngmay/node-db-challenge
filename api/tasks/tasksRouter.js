const express = require("express");

const Tasks = require("./tasksModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      tasks.forEach(task => (task.completed = Boolean(task.completed)));
      return res.status(200).json(tasks);
    })
    .catch(err => {
      return res.status(500).json({ message: "Failed to get tasks." });
    });
});

module.exports = router;
