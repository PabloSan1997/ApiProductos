

function boomHandle(error, req, res, next) {
    if(error.isBoom){
        const parametros = error.output.payload;
        res.status(parametros.statusCode).json(parametros);
    }
    next(error);
}
module.exports={boomHandle}
