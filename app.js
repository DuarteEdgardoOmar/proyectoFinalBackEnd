const express = require ( 'express');

const app = express();

const routeProducto = require('./routes/productoRoutes.js');

const routeUsuario = require ('./routes/usuarioRoutes.js');

const {connect} = require ('./database/db.js');

//middelware que permite enviar y recibir obj Json
app.use(express.json());

//ruta a productos
app.use('/productos', routeProducto);

//ruta a usuarios en api externa
app.use('/usuarios', routeUsuario);

//conexion a base de datos mongo
connect();

module.exports = app;