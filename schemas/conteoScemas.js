const Joi = require("joi");

const nombre = Joi.string().min(1);
const cuantos = Joi.number().integer().min(0);
const tomar = Joi.number().integer().min(0);

const agregarConteo = Joi.object({
    nombre:nombre.required(),
    cuantos:cuantos.required(),
    tomar:tomar.required()
});

const editarConteo = Joi.object({
    nombre:nombre,
    cuantos:cuantos,
    tomar:tomar,
});

module.exports={agregarConteo, editarConteo}