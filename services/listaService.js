const boom = require("@hapi/boom");
const { Lista } = require("../dataBase/schema");

class ListaServicio {
  async leer() {
    try {
      const datos = await Lista.find();
      if (datos.length === 0) {
        throw "No se encontraron elementos";
      }
      return datos;
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async leerUno(id) {
    try {
      const datos = await Lista.findOne({ _id: id });
      if (datos.length === 0) {
        throw "No se encontraró elemento";
      }
      return datos;
    } catch (error) {
      throw boom.notFound(error);
    }
  }
  async agregar(body) {
    try {
      const ver = await Lista.findOne({ nombre: body.nombre });
      if (!!ver) {
        throw "Nombre repetido";
      }
      const datos = await Lista.create(body);
      return datos;
    } catch (error) {
      throw boom.badRequest(error);
    }
  }
  async editarUno(id, cuerpo) {
    try {
      const ver = await Lista.findOne({nombre:cuerpo.nombre});
      if(!!ver){
        throw "Nombre repetido";
      }
      const dato = await Lista.findOneAndUpdate({_id:id}, cuerpo);
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
        const dato = await Lista.findOneAndDelete({_id:id});
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
        const datos = await Lista.deleteMany({});
        return datos;
      } catch (error) {
        throw boom.badRequest(error);
      }
  }
}

module.exports = {
  ListaServicio,
};
