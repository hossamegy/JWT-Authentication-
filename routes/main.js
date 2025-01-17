const { login, dashboard } = require('../controllers/main.Controller');
const authenticationMiddlware = require('../middleware/auth');
const express = require('express');
const router = express.Router();

router.route('/login').post(login);

router.route('/dashboard').get(authenticationMiddlware, dashboard);

module.exports = router;