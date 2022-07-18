const Joi = require('joi');
// displayName deve ter no minimo 8 caracteres 
// email deve ter formato válido
// password deve ter no minimo 6 caracteres 

const characterDTO = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().required(),
});

const validateBodyAdd = (req, res, next) => {
    const { error } = characterDTO.validate(req.body);

    if (!error) {
        return next();
    }

    console.log({ errorJoi: error });
    const { message } = error.details[0];
    return res.status(400).json({ message });
};

module.exports = validateBodyAdd;