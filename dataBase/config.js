const Mongoose = require("mongoose");
const { informacion } = require("./info");


const URL = `mongodb+srv://${informacion.USER}:${informacion.PASSWORD}@listaproducto.6ndzynb.mongodb.net/${informacion.NAME}?retryWrites=true&w=majority`;

function conectar(){
    Mongoose.connect(URL,  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(mes=>{console.log("Se ha conectado con el server")}).catch(err=>console.log("error al conectar"));
}

module.exports={conectar}