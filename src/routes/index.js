const { Router } = require("express");

const apiRoutes = require("./api/apiRoutes");
const viewRoutes = require("./view/viewRoutes.js");

const router = Router();

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;
