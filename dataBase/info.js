require("dotenv").config();

const informacion = {
    USER:process.env.USER_DB,
    PASSWORD:process.env.PASSWORD_DB,
    NAME:process.env.NAME_DB,
    COMBINAR:process.env.COMBINAR
}
module.exports={informacion}