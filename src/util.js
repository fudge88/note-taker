const fs = require("fs");
const path = require("path");

const getNotesFromFile = () => {
  const notesJSON = fs.readFileSync(
    path.join(__dirname, "/db/db.json"),
    "utf-8"
  );

  const notes = JSON.parse(notesJSON);

  return notes;
};

const writeNotesToFile = (data) => {
  fs.writeFileSync(path.join(__dirname, "/db/db.json"), data);
};

module.exports = { getNotesFromFile, writeNotesToFile };
