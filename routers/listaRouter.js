const express = require("express");

const lista = express.Router();

lista.get("/", (req, res)=>{
    res.json({message:"Yo soy lista"});
});

module.exports={lista}