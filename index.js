const express = require("express");
const app = express();
const cors = require("cors");
const { crearApi } = require("./routers");
const { boomHandle } = require("./middlewares/boomHandle");
const { conectar } = require("./dataBase/config");
const { errorUsuario } = require("./middlewares/usuarioHandle");
const PUERTO = process.env.PORT || 3001;

app.use(express.json());
const whiteList = [
  "https://productoconteo.onrender.com",
  "https://productoconteo.onrender.com/#/conteo",
  "https://productoconteo.onrender.com/#/lista",
];
app.use(cors({origin:whiteList}));
conectar();
crearApi(app);
app.use(boomHandle);
app.use(errorUsuario);
app.get("/", (req, res) => {
  res.json({ message: "Estas conectado 😀" });
});

// app.listen(PUERTO, ()=>{
//     console.log(`http://localhost:${PUERTO}/`)
// });
app.listen(PUERTO);
