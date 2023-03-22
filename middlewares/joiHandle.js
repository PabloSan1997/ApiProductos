const boom = require("@hapi/boom");
function validatorHandler(schema, property) {
  return (req, res, next) => {
    const cuerpo = req[property];
    const { error } = schema.validate(cuerpo, { abortEarly: false });
    if(!!error){
        throw boom.badRequest(error);
    }
    next();
  };
}

module.exports = {
  validatorHandler,
};
