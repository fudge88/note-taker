const path = require("path");

const renderHome = (req, res) => {
  const filePath = path.join(__dirname, "../../../public/index.html");
  res.sendFile(filePath);
};

const renderNotes = (req, res) => {
  res.send("renders notes");
};

module.exports = { renderHome, renderNotes };
