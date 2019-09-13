const db = require("../../data/db-config.js");

module.exports = {
  getProjects
};

function getProjects() {
  return db("projects");
}
