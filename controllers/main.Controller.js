const CustomError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) throw new CustomError("No user name or password!!", 401);

    const token = jwt.sign(
        { username },
        process.env.SCRET_KEY,
        {expiresIn: '1d'}
    )
    res.status(200).json({message: { username, tokens:token}})
}

const dashboard = (req, res) => {
    const username = req.user.username;
    res.status(200).json({message: username}); 
}

module.exports = {
    login,
    dashboard
}