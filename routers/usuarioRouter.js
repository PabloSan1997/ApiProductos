const express = require("express");
const ServicioUsuario = require("../services/usuarioService");
const usuario = express.Router();
const servicio = new ServicioUsuario();

usuario.post("/" ,async(req, res, next)=>{
   try {
    const datos = await servicio.permiso(req.body);
    res.json({message:datos});
   } catch (error) {
        next(error);
   }
});
usuario.get("/:aver",async(req, res, next)=>{
   try {
      const datos = await servicio.abrir(req.params.aver);
      res.json({estado:datos});
     } catch (error) {
      res.json({estado:false});
     }
});
module.exports={usuario}