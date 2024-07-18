const express = require('express');
const app = express();



// Importing Dependencies
const connectToDb = require('./config/connectToDb');
const cookieParser = require('cookie-parser');
const notesController = require('./controllers/notesController');
const usersController = require('./controllers/usersController');
const requireAuth = require('./middleware/requireAuth');
// Configure express app
app.use(express.json());
app.use(cookieParser());

// Configure Cors
const cors = require('cors');
app.use(cors({
    origin: true,
    credentials: true,
}));

// Loading Env variables
if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
};

// connect To the Database
connectToDb();

//ROutiing
app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.get('/logout', usersController.logout);
app.get('/check-auth', requireAuth, usersController.checkAuth);

app.get('/notes', notesController.fetchNotes);
app.get('/notes/:id', notesController.fetchNote);
app.post('/notes' , notesController.addNotes);
app.put('/notes/:id', notesController.updateNotes);
app.delete('/notes/:id', notesController.deleteNotes);

// Start Our Server
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3000');
})