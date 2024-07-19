const Note = require("../models/note");
// const router = require('router');

const addNotes = async (req, res) => {
  try {
    // Getting the request body
    const { title, body } = req.body;

    // Creating a new note
    const note = await Note.create({
      title,
      body,
      user: req.user._id,
    });
    // Sending the created note back to the client
    res.json({ note });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

// Fetching Notes
const fetchNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id });
    res.json({ notes });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

// Fetching Single Note
const fetchNote = async (req, res) => {
  try {
    // getting the id
    const noteId = req.params.id;
    // findind by Id
    const note = await Note.findOne({ _id: noteId, user: req.user._id });
    // sending the note back to the client
    res.json({ note });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

// Updating a Note
const updateNotes = async (req, res) => {
  try {
    // Getting the id and the updated values
    const noteId = req.params.id;
    const { title, body } = req.body;
    // Updating the Note
    await Note.findByOneAndUpdate(
      { _id: noteId, user: req.user._id },
      {
        title,
        body,
      }
    );
    // Find the updated Note
    const note = await Note.findById(noteId);
    // Sending the updated note back to the client
    res.json({ note });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

// Deleting a Note
const deleteNotes = async (req, res) => {
  try {
    // Getting the id
    const noteId = req.params.id;
    // Deleting the Note
    await Note.findOneAndDelete({ _id: noteId, user: req.user._id });
    // Sending a success message back to the user
    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
module.exports = {
  addNotes,
  fetchNotes,
  fetchNote,
  updateNotes,
  deleteNotes,
};
