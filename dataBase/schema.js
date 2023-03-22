const Mongoose = require('mongoose');

const Schema = Mongoose.Schema; 

const conteoS = new Schema({
    nombre:String,
    cuantos:Number,
    tomar:Number
})

const Conteo = Mongoose.model("Conteo", conteoS);

module.exports={Conteo}