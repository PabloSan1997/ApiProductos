const express = require("express");

const { conteo } = require("./conteoRouter");
const { lista } = require("./listaRouter");
const { usuario } = require("./usuarioRouter");

const principal = express.Router();

function crearApi(app){
    app.use("/api/v1", principal);
    principal.use("/conteo", conteo);
    principal.use("/lista", lista);
    principal.use("/usuario", usuario);
}
module.exports={crearApi}