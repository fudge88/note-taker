const { Router } = require("express");

const { renderNotes, renderHome } = require("../../controllers/view");

const routes = Router();

routes.use("/notes", renderNotes);
routes.use("*", renderHome);

module.exports = routes;
