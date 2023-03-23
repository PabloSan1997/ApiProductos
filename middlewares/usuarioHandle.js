

function errorUsuario(error, req, res, next){
    if(error.ver){
        res.status(400).json({message:error.message, state:false});
    }
    next(error);
}
module.exports={errorUsuario}

