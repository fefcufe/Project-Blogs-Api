const express = require('express');
const controller = require('../controllers/userController');
const userValidation = require('../middlewares/userValidation');

const router = express.Router();

router.post('/', userValidation, controller.addUser);

module.exports = router;