const express = require("express");
const { validatorHandler } = require("../middlewares/joiHandle");
const { crearLista } = require("../schemas/listaSchema");
const { ListaServicio } = require("../services/listaService");
const servicio = new ListaServicio();
const lista = express.Router();

lista.get("/", async (req, res, next) => {
  try {
    const hola = await servicio.leer();
    res.json(hola);
  } catch (error) {
    next(error);
  }
});

lista.get("/:id", async (req, res, next) => {
  try {
    const hola = await servicio.leerUno(req.params.id);
    res.json(hola);
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
      res.json(hola);
    } catch (error) {
      next(error);
    }
  }
);
lista.delete("/borrarTodo", async (req, res, next)=>{
    try {
        const dato = await servicio.borrarTodo();
        res.json(dato);
    } catch (error) {
        next(error);
    }
  });

lista.delete("/:id", async (req, res, next)=>{
    try {
        const dato = await servicio.borrarUno(req.params.id);
        res.json(dato);
    } catch (error) {
        next(error);
    }
});

module.exports = { lista };
