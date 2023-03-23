const Joi = require("joi");

const usuario = Joi.string().min(1);
const contra = Joi.number().min(1);

const checarUsuario = Joi.object(
    {
        usuario:usuario.required(),
        contra:contra.required()
    }
);



module.exports={checarUsuario}