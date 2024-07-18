const jwt = require('jsonwebtoken');
const User = require('../models/user');
async function requireAuth(req, res, next) {
    try {
        // Read token off cookies
    const token = req.cookies.Authorization;

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);
    // Check Expiration
    if(Date.now() > decoded.exp) return res.sendStatus(401);
    // Find user using decoded sub
        const user = await User.findById(decoded.sub);
        if (!User) return res.sendStatus(401);
    // attch user to req
    req.user = user;
    // continue
    next();
    } catch(err) {
        return res.sendStatus(401);
    }
    
}
module.exports = requireAuth;