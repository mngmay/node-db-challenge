const express = require("express");

const Projects = require("./projectsModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      projects.forEach(
        projects => (projects.completed = Boolean(projects.completed))
      );

      return res.status(200).json(projects);
    })
    .catch(err => {
      return res.status(500).json({ message: "Failed to get projects." });
    });
});

router.post("/", (req, res) => {
  const project = req.body;

  Projects.addProject(project)
    .then(project => {
      project.completed = Boolean(project.completed);
      return res.status(200).json(project);
    })
    .catch(err => {
      return res.status(500).json({ message: "Failed to post project." });
    });
});

module.exports = router;
