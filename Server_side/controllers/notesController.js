const Note = require("../models/note");
// const router = require('router');

const addNotes = async (req, res) => {
    // Getting the request body
    const {title, body} = req.body;
    
    // Creating a new note
    const note = await Note.create({
        title,
        body
    });
    // Sending the created note back to the client
    res.json({note})
}

// Fetching Notes
const fetchNotes = async (req, res) => {
    const notes = await Note.find();
    res.json({notes});
};

// Fetching Single Note
const fetchNote =  async (req, res) => {
    // getting the id
    const noteId = req.params.id;
    // findind by Id
    const note = await Note.findById(noteId);
    // sending the note back to the client
    res.json({note});

};

// Updating a Note
const updateNotes = async(req, res) => {
    // Getting the id and the updated values
    const noteId = req.params.id;
    const {title, body} = req.body;
    // Updating the Note
    await Note.findByIdAndUpdate(noteId, {
        title,
        body
    });
    // Find the updated Note
    const note = await Note.findById(noteId);
    // Sending the updated note back to the client
    res.json({note});
};

// Deleting a Note
const deleteNotes = async(req, res) => {
    // Getting the id
    const noteId = req.params.id;
    // Deleting the Note
    await Note.findOneAndDelete(noteId);
    // Sending a success message back to the user
    res.json({message: 'Note deleted successfully'});

};
module.exports = {
    addNotes,
    fetchNotes,
    fetchNote,
    updateNotes,
    deleteNotes,
}

