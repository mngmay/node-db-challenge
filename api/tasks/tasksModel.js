const db = require("../../data/db-config.js");

module.exports = {
  getTasks,
  findTaskById,
  addTask
};

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select(
      "t.*",
      "p.name as project_name",
      "p.description as project_description"
    );
}

function findTaskById(id) {
  return db("tasks")
    .where({ id: id })
    .then(task => {
      if (task) {
        return task[0];
      } else {
        return null;
      }
    });
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(id => {
      return findTaskById(id[0]);
    });
}
