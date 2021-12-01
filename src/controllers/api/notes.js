const fs = require("fs");
const path = require("path");

const getNotesFromFile = () => {
  const notesJSON = fs.readFileSync(
    path.join(__dirname, "../../db/db.json"),
    "utf-8"
  );

  const notes = JSON.parse(notesJSON);

  return notes;
};

const getNotes = (req, res) => {
  const notes = getNotesFromFile();
  res.json(notes);
};

const getNoteById = (req, res) => {
  const { id } = req.params;
  const notes = getNotesFromFile();
  const note = notes.find((note) => {
    return note.id === id;
  });
  if (note) {
    return res.json(note);
  }
  return res.status(404).json({
    message: `INVALID SEARCH - Note ID:${id} was not found`,
  });
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
