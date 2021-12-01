const { Router } = require("express");
const noteRoutes = require("./noteRoutes");
const routes = Router();

routes.use("/notes", noteRoutes);

module.exports = routes;
