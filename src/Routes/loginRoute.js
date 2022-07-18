const express = require('express');
const controller = require('../controllers/login');
// const middlewareJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', controller.postLogin);

module.exports = router;