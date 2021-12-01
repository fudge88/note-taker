const { Router } = require("express");
const apiRoutes = require("./api/apiRoutes");

const router = Router();

router.use("/api", apiRoutes);

module.exports = router;
