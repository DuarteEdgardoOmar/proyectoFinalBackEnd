const express = require('express');

const routeProducto = express.Router();

const funciones_Productos = require('../controllers/productoController.js')

const { validar_Id_Producto } = require('../middelware/validarID.js')

const { check_campos } = require('../models/check-campos.js');

const { validation_campos } = require('../models/validation-campos.js');

//ruta para consultar todos los productos 
//http://localhost:8080/productos/verProductos
routeProducto.get('/verProductos', funciones_Productos.verProductos);

//ruta para buscar producto por ID, middelware valida id del producto
//http://localhost:8080/productos/buscarProductoPorId/6439aa134b202e98e0ac8ab0
routeProducto.get('/buscarProductoPorId/:id', validar_Id_Producto, funciones_Productos.buscar_producto_ID);

//ruta para crear un producto
//http://localhost:8080/productos/crearNuevoProducto
routeProducto.post('/crearNuevoProducto', check_campos, validation_campos, funciones_Productos.crear_producto);

//ruta para editar un producto, middelware valida id del producto
//http://localhost:8080/productos/editarProductoPorID/6439aa134b202e98e0ac8ab
routeProducto.put('/editarProductoPorID/:id', validar_Id_Producto, check_campos, validation_campos, funciones_Productos.editar_producto_por_Id);

//ruta para eliminar un producto  
//http://localhost:8080/productos/eliminarProductoPorId/64386c127b7ba2fd6b6addaa
routeProducto.delete('/eliminarProductoPorId/:id', validar_Id_Producto, funciones_Productos.eliminar_producto_por_Id);



module.exports = routeProducto;