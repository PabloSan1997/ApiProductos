const express = require("express");
const { Conteo } = require("../dataBase/schema");
const { validatorHandler } = require("../middlewares/joiHandle");
const { mostrar } = require("../results/main");
const { agregarConteo, editarConteo } = require("../schemas/conteoScemas");
const { ServicioProducto } = require("../services/servicioProducto");
const conteo = express.Router();
const servicios = new ServicioProducto(Conteo);

conteo.get("/", async (req, res, next) => {
  try {
    const datos = await servicios.leer();
    mostrar(res, 200, datos);
  } catch (error) {
    next(error);
  }
});

conteo.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const datos = await servicios.leerUno(id);
    mostrar(res, 200, datos);
  } catch (error) {
    next(error);
  }
});

conteo.post("/", validatorHandler(agregarConteo, "body"),async (req, res, next) => {
    const cuerpo = req.body;
    try {
      const datos = await servicios.agregar(cuerpo);
      mostrar(res, 201, datos);
    } catch (error) {
        next(error);
    }
  });

  conteo.patch("/:id",validatorHandler(editarConteo, "body"), async(req, res, next)=>{
    try {
        const dato = await servicios.editarUno(req.params.id, req.body);
        mostrar(res, 201, dato);
    } catch (error) {
        next(error);
    }
  });
  conteo.delete("/borrarTodo", async (req, res, next)=>{
    try {
        const dato = await servicios.borrarTodo();
        mostrar(res, 201, dato);
    } catch (error) {
        next(error);
    }
  });
  conteo.delete("/:id", async (req, res, next)=>{
    try {
        const dato = await servicios.borrarUno(req.params.id);
        res.json(dato);
    } catch (error) {
        next(error);
    }
  });
module.exports = { conteo };
