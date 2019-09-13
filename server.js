const express = require("express");
const helmet = require("helmet");

const ProjectsRouter = require("./api/projects/projectsRouter.js");
const ResourcesRouter = require("./api/resources/resourcesRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);

module.exports = server;
