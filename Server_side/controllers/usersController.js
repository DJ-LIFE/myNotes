const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

async function signup(req, res) {
    try{
    // Get the email and Password
    const { email, password } = req.body;

    // Hashing the Password
    const  hashedPassword = bcrypt.hashSync(password, 8);
    // Create a user with the data
    await User.create({ email, password : hashedPassword });
    // respond
    res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
}
async function login(req, res) {
    try{
        // Get the email and Password
        const { email, password } = req.body;

        // Find the user with requested email
        const user = await User.findOne({ email });
        if(!user) return res.sendStatus(401);

        // Compare sent in password with found user password hash
        // Load hash from your password DB.
            const passwordMatch = bcrypt.compareSync(password, user.password); // true
            if(!passwordMatch) return res.sendStatus(401);
        // create a jwt token
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

        // Set the Cookie
        res.cookie("Authorization", token, {
            expires: new Date(exp),
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === "production",
        })
        // sent it
        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.senStatus(401);
    }
    
    
    
}

function logout(req, res) {
    try {
        res.clearCookie("Authorization");
        res.sendStatus(200);
    } catch(err){
        console.log(err);
        res.senStatus(401);
    }
}

function checkAuth(req, res) {
    try{
        console.log(req.user);
        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        res.sendStatus(401);
    }
}

module.exports = {
    signup,
    login,
    logout,
    checkAuth,
};