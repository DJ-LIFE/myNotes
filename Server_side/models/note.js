const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Note = mongoose.model("Node", noteSchema);

// Exporting the Note
module.exports = Note;