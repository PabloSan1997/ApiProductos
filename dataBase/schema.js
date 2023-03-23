const Mongoose = require('mongoose');

const Schema = Mongoose.Schema; 

const conteoS = new Schema({
    nombre:String,
    cuantos:Number,
    tomar:Number
})

const listaS = new Schema({
    nombre:String,
    precio:Number,
    cantidad:Number
}); 

const Conteo = Mongoose.model("Conteo", conteoS);
const Lista = Mongoose.model("ListaComprar", listaS)
module.exports={Conteo, Lista}