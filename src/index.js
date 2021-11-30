const express = require("express");
const path = require("path");

// listening on port 3000
const PORT = 3000;

// create a new express app
const app = express();

const renderHome = (req, res) => {
  const filePath = path.join(__dirname, "../", "public/index.html");
  res.sendFile(filePath);
};

const renderNotes = (req, res) => {
  const filePath = path.join(__dirname, "../", "public/notes.html");
  res.sendFile(filePath);
};

// registering a get path for /
app.get("/", renderHome);
app.get("/api", renderNotes);

// connect express app to correct port
app.listen(PORT, () => console.log(`Navigate to http://localhost:${PORT}`));
