const { Router } = require("express");
const {
  getNotes,
  getNoteById,
  addNote,
  deleteNote,
} = require("../../controllers/api/notes");
const router = Router();

// get
router.get("/", getNotes);
router.get("/:id", getNoteById);

// post
router.post("/", addNote);

// delete
router.delete("/:id", deleteNote);

module.exports = router;
