const mongoose = require('mongoose');
async function connectToDb() {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to the Database");
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectToDb;