const crypt = require("bcrypt");
const boom = require("@hapi/boom");
const { Contra } = require("../dataBase/schema");
const jwt = require("jsonwebtoken");
const { informacion } = require("../dataBase/info");
let randomWords = require("random-words");
module.exports = class ServicioUsuario {
  constructor() {
    this.juego = this.generar();
  }
  async permiso(cuerpo) {
    try {
      const ver = await Contra.find();
      const hola = jwt.verify(ver[0].body, informacion.COMBINAR);
      const cont = await crypt.compare(cuerpo.contra, hola.contra);
      const aver = hola.usuario === cuerpo.usuario && cont;
      if (!aver) {
        throw "Contraseña o Usuario incorrectos";
      }
      const encriptar = await crypt.hash(cuerpo.contra, 8);
      const objeto = {
        usuario: "Familia",
        contra: encriptar,
      };
      const cambiar = jwt.sign(objeto, informacion.COMBINAR);
      const borrar = await Contra.deleteMany({});
      const mandar = await Contra.create({ body: cambiar });
      return this.juego;
    } catch (error) {
      throw { ver: true, message: error };
    }
  }
  generar() {
    const palabra = randomWords(1);
    return jwt.sign(palabra[0], informacion.COMBINAR);
  }
  async abrir(ver) {
    const texto = jwt.verify(ver, informacion.COMBINAR);
    const palabra = this.juego;
    const texto2 = jwt.verify(palabra, informacion.COMBINAR);
    if (texto === texto2) {
      return true;
    }
    return false;
  }
};
