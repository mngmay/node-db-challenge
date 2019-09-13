const db = require("../../data/db-config.js");

module.exports = {
  getProjects,
  findProjectById,
  addProject
};

function getProjects() {
  return db("projects");
}

async function findProjectById(id) {
  return [
    await db("projects as p")
      .where({ id })
      .first(),
    await db("tasks as t")
      .where({ project_id: id })
      .select("t.id", "t.description", "t.notes", "t.completed"),
    await db("project_resources as pr")
      .where({ project_id: id })
      .join("resources as r", "r.id", "pr.resource_id")
      .select("r.id", "r.name", "r.description")
  ];
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(id => {
      return findProjectById(id[0]);
    });
}
