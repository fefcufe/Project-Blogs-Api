const express = require('express');
const JWTvalidation = require('../auth/validateJWT');
const controller = require('../controllers/postController');

const router = express.Router();

// router.post('/', );

router.get('/', JWTvalidation, controller.getPosts);

module.exports = router;