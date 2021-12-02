const renderHome = (req, res) => {
  res.send("renders home page");
};

const renderNotes = (req, res) => {
  res.send("renders notes");
};

module.exports = { renderHome, renderNotes };
