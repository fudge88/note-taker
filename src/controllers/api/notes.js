const { v4: uuidv4 } = require("uuid");
const { getNotesFromFile, writeNotesToFile } = require("../../util.js");

// get all notes
const getNotes = (req, res) => {
  const notes = getNotesFromFile();
  console.log(notes);
  if (notes.length) {
    return res.json(notes);
  }
  return res.status(404).json({
    message: `No notes found`,
  });
};

// get specific note
const getNoteById = (req, res) => {
  const { id } = req.params;
  const notes = getNotesFromFile();
  const note = notes.find((note) => {
    return note.id === id;
  });
  if (note) {
    return res.json(note);
  }
  // return status 404 with message
  return res.status(404).json({
    message: `INVALID SEARCH - Note ID:${id} was not found`,
  });
};

// add note
const addNote = (req, res) => {
  const payload = req.body;
  const validKeys = ["title", "text"];

  // validation
  const isValid = validKeys.every((key) => {
    return Object.keys(payload).includes(key);
  });

  if (isValid) {
    const newNote = {
      id: uuidv4(),
      ...payload,
    };

    const notes = getNotesFromFile();

    notes.push(newNote);

    writeNotesToFile(JSON.stringify(notes));

    return res.json(newNote);
  }

  return res
    .status(400)
    .json({ message: "Please enter valid values to requested keys" });
};

// delete note
const deleteNote = (req, res) => {
  const { id } = req.params;

  const notes = getNotesFromFile();

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({
      message: `INVALID SEARCH - Note ID:${id} was not found`,
    });
  }
  const newNote = notes.filter((note) => {
    return note.id !== id;
  });

  writeNotesToFile(JSON.stringify(newNote));

  return res.json(newNote);
};

module.exports = {
  getNotes,
  getNoteById,
  addNote,
  deleteNote,
};
