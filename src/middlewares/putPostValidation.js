const Joi = require('joi');

const characterDTO = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
});

const validateBodyAdd = (req, res, next) => {
    const { error } = characterDTO.validate(req.body);
    if (!error) {
        return next();
    }

    const { message } = error.details[0];
    if (message.includes('required') || message.includes('empty')) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    return res.status(400).json({ message });
};

module.exports = validateBodyAdd;