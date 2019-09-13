const express = require("express");

const Resources = require("./resourcesModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
      return res.status(200).json(resources);
    })
    .catch(err => {
      return res.status(500).json({ message: "Failed to get resources." });
    });
});

module.exports = router;
