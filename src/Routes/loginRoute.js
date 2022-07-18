const express = require('express');
const controller = require('../controllers/loginController');
// const middlewareJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', controller.postLogin);

module.exports = router;