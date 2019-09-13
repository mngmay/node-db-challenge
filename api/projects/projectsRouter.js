const express = require("express");

const Projects = require("./projectsModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      return res.status(200).json(projects);
    })
    .catch(err => {
      return res.status(500).json({ message: "Failed to get projects." });
    });
});

module.exports = router;
