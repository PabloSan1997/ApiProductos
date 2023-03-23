const boom = require("@hapi/boom");
const { Conteo } = require("../dataBase/schema");

class ConteoServicios {
  async leer() {
    try {
      const datos = await Conteo.find();
      if (datos.length === 0) {
        throw "no hay datos";
      }
      return datos;
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async leerUnoId(id) {
    try {
      const dato = await Conteo.findOne({ _id: id });
      if (!dato) {
        throw "no se encontro elemto";
      }
      return dato;
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async agregar(cuerpo) {
    try {
      const ver = await Conteo.findOne({nombre:cuerpo.nombre});
      if(!!ver){
        throw "Nombre repetido";
      }
      const datos = await Conteo.create(cuerpo);
      return datos;
    } catch (error) {
      throw boom.badRequest(error);
    }
  }
  async editarUno(id, cuerpo) {
    try {
      const ver = await Conteo.findOne({nombre:cuerpo.nombre});
      if(!!ver){
        throw "Nombre repetido";
      }
      const dato = await Conteo.findOneAndUpdate({_id:id}, cuerpo);
      if(!dato){
        throw "No se puede editar ese elemento"
      }
      return dato;
    } catch (error) {
      throw boom.badRequest(error);
    }
  }
  async borrarUno(id){
    try {
      const dato = await Conteo.findOneAndDelete({_id:id});
      if(!dato){
        throw "No se puede eliminar ese elemento"
      }
      return dato;
    } catch (error) {
      throw boom.badRequest(error);
    }
  }
  async borrarTodo(){
    try {
      const datos = await Conteo.deleteMany({});
      return datos;
    } catch (error) {
      throw boom.badRequest(error);
    }
  }
}

module.exports = {
  ConteoServicios,
};
