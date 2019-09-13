const db = require("../../data/db-config.js");

module.exports = {
  getResources,
  findResourceById,
  addResource
};

function getResources() {
  return db("resources");
}

function findResourceById(id) {
  return db("resources")
    .where({ id: id })
    .then(resource => {
      if (resource) {
        return resource[0];
      } else {
        return null;
      }
    });
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(id => {
      return findResourceById(id[0]);
    });
}
