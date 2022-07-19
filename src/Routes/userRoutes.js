const express = require('express');
const controller = require('../controllers/userController');
const userValidation = require('../middlewares/userValidation');
const JWTvalidation = require('../auth/validateJWT');

const router = express.Router();

router.post('/', userValidation, controller.addUser);

router.get('/', JWTvalidation, controller.getUsers);

module.exports = router;