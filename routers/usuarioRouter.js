const express = require("express");
const { validatorHandler } = require("../middlewares/joiHandle");
const { checarUsuario } = require("../schemas/usuarioSchema");
const ServicioUsuario = require("../services/usuarioService");
const usuario = express.Router();
const servicio = new ServicioUsuario();

usuario.post("/",validatorHandler(checarUsuario, "body") ,async(req, res, next)=>{
   try {
    const datos = await servicio.permiso(req.body);
    res.json(datos);
   } catch (error) {
        next(error);
   }
});

module.exports={usuario}