const express = require("express");

const usuario = express.Router();

usuario.get("/", (req, res)=>{
    res.json({message:"Yo soy usuario"});
});

module.exports={usuario}