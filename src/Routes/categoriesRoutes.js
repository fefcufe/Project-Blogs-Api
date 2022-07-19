const express = require('express');
const JWTvalidation = require('../auth/validateJWT');
const controller = require('../controllers/categoryController');
const categoryValidation = require('../middlewares/categoryValidation');

const router = express.Router();

router.post('/', JWTvalidation, categoryValidation, controller.addCategory);

router.get('/', JWTvalidation, controller.getCategories);

module.exports = router;