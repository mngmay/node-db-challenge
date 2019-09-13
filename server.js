const express = require("express");
const helmet = require("helmet");

const ProjectsRouter = require("./api/projects/ProjectsRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectsRouter);

module.exports = server;
