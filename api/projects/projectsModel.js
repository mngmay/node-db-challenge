const db = require("../../data/db-config.js");

module.exports = {
  getProjects,
  findProjectById,
  addProject
};

function getProjects() {
  return db("projects");
}

function findProjectById(id) {
  return db("projects")
    .where({ id: id })
    .then(project => {
      if (project) {
        return project[0];
      } else {
        return null;
      }
    });
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(id => {
      return findProjectById(id[0]);
    });
}
