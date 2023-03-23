const Joi = require("joi");

const nombre = Joi.string().min(1);
const precio = Joi.number().min(0);
const cantidad = Joi.number().integer().min(0);

const crearLista = Joi.object(
    {
        nombre:nombre.required(),
        precio:precio.required(),
        cantidad:cantidad.required(),
    }
);

const editarLista = Joi.object(
    {
        nombre:nombre,
        precio:precio,
        cantidad:cantidad,
    }
);

module.exports={crearLista, editarLista}