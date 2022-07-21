const express = require('express');
const JWTvalidation = require('../auth/validateJWT');
const controller = require('../controllers/postController');
const putMiddleware = require('../middlewares/putPostValidation');

const router = express.Router();

// router.post('/', );

router.get('/', JWTvalidation, controller.getPosts);

router.get('/:id', JWTvalidation, controller.getPostById);

router.put('/:id', JWTvalidation, putMiddleware, controller.updatePost);

module.exports = router;