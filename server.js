const express = require("express");
const helmet = require("helmet");

const ProjectsRouter = require("./api/projects/projectsRouter.js");
const ResourcesRouter = require("./api/resources/resourcesRouter.js");
const TasksRouter = require("./api/tasks/tasksRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);
server.use("/api/tasks", TasksRouter);

module.exports = server;
