const CustomError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');

const authenticationMiddlware = (req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;
    console.log(authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new CustomError("No token provided!", 401);
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(
            token,
            process.env.SCRET_KEY
        );
        req.user = { username: decoded.username };
        next();
    } catch (err) {
        throw new CustomError("Not authorized user!", 401);
    }
};

module.exports = authenticationMiddlware;
