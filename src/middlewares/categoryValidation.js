const Joi = require('joi');

// body deve ter name

const characterDTO = Joi.object({
    name: Joi.string().required(),
});

const validateBodyAdd = (req, res, next) => {
    const { error } = characterDTO.validate(req.body);
    if (!error) {
        return next();
    }

    const { message } = error.details[0];
    return res.status(400).json({ message });
};

module.exports = validateBodyAdd;