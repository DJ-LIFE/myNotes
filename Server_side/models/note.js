const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    title: String,
    body: String
});

const Note = mongoose.model("Node", noteSchema);

// Exporting the Note
module.exports = Note;