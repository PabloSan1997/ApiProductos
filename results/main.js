function mostrar(res, statusCode, objeto){
    const nuevo = {
        statusCode,
        data:objeto
    }
    res.status(statusCode).json(nuevo);
}

module.exports = {mostrar}