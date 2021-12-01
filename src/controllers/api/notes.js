const getNotes = (req, res) => {
  res.send("getNotes");
};
const getNoteById = (req, res) => {
  res.send("getNoteById");
};
const addNote = (req, res) => {
  res.send("addNote");
};
const deleteNote = (req, res) => {
  res.send("deleteNote");
};

module.exports = {
  getNotes,
  getNoteById,
  addNote,
  deleteNote,
};
