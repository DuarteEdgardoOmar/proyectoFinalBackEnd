const express = require('express');

const routeUsuario = express.Router();

const Usuario_Controller = require('../controllers/usuarioController.js');


//ruta a api externa https://jsonplaceholder.typicode.com/users
//http://localhost:8080/usuarios/verUsuarios
routeUsuario.get('/verUsuarios', Usuario_Controller.ver_todos_los_usuarios_axios);

//ruta a buscar usuario por id en https://jsonplaceholder.typicode.com/users/1
//http://localhost:8080/usuarios/buscarUsuarioPorId/1
routeUsuario.get('/buscarUsuarioPorId/:id', Usuario_Controller.buscar_usuario_por_id);

module.exports = routeUsuario;