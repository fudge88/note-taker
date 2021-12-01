const express = require("express");
const routes = require("./routes");
// listening on port 3000
const PORT = 3000;

// create a new express app
const app = express();

// app use my routes
app.use(routes);

// connect express app to correct port
app.listen(PORT, () => console.log(`Navigate to http://localhost:${PORT}`));
