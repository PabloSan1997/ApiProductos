const boom = require("@hapi/boom");


class ServicioProducto {
  constructor(Clase){
    this.Clase=Clase
  }
  async leer() {
    try {
      const datos = await this.Clase.find();
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
      const datos = await this.Clase.findOne({ _id: id });
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
      const ver = await this.Clase.findOne({ nombre: body.nombre });
      if (!!ver) {
        throw "Nombre repetido";
      }
      const datos = await this.Clase.create(body);
      return datos;
    } catch (error) {
      throw boom.badRequest(error);
    }
  }
  async editarUno(id, cuerpo) {
    try {
      const ver = await this.Clase.findOne({nombre:cuerpo.nombre});
      if(!!ver){
        throw "Nombre repetido";
      }
      const dato = await this.Clase.findOneAndUpdate({_id:id}, cuerpo);
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
        const dato = await this.Clase.findOneAndDelete({_id:id});
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
        const datos = await this.Clase.deleteMany({});
        return datos;
      } catch (error) {
        throw boom.badRequest(error);
      }
  }
}

module.exports = {
  ServicioProducto,
};
