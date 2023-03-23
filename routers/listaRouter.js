const express = require("express");
const { Lista } = require("../dataBase/schema");
const { validatorHandler } = require("../middlewares/joiHandle");
const { mostrar } = require("../results/main");
const { crearLista, editarLista } = require("../schemas/listaSchema");
const { ServicioProducto } = require("../services/servicioProducto");
const servicio = new ServicioProducto(Lista);
const lista = express.Router();

lista.get("/", async (req, res, next) => {
  try {
    const hola = await servicio.leer();
    mostrar(res, 200, hola);
  } catch (error) {
    next(error);
  }
});

lista.get("/:id", async (req, res, next) => {
  try {
    const hola = await servicio.leerUno(req.params.id);
    mostrar(res, 200, hola);
  } catch (error) {
    next(error);
  }
});

lista.post(
  "/",
  validatorHandler(crearLista, "body"),
  async (req, res, next) => {
    try {
      const hola = await servicio.agregar(req.body);
      mostrar(res, 201, hola);
    } catch (error) {
      next(error);
    }
  }
);
lista.patch("/:id",validatorHandler(editarLista, "body"), async(req, res, next)=>{
  try {
      const dato = await servicio.editarUno(req.params.id, req.body);
      mostrar(res, 201, dato);
  } catch (error) {
      next(error);
  }
});
lista.delete("/borrarTodo", async (req, res, next)=>{
    try {
        const dato = await servicio.borrarTodo();
        mostrar(res, 201, dato);
    } catch (error) {
        next(error);
    }
  });

lista.delete("/:id", async (req, res, next)=>{
    try {
        const dato = await servicio.borrarUno(req.params.id);
        mostrar(res, 200, dato);
    } catch (error) {
        next(error);
    }
});

module.exports = { lista };
