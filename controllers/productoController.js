const { Producto } = require('../models/productoModels.js')

class Producto_controller {

    //ver todos los productos
    async verProductos(req, res) {
        try {
            //listamos productos de bd
            const listaProductos = await Producto.find();

            res.json(listaProductos);

        } catch (error) {
            res.status(501).json({ msg: 'no hay productos cargados, verifique...' })
        }
    }

    //busqueda por id
    async buscar_producto_ID(req, res) {

        try {
            const producto = await Producto.findById(req.params.id)

            res.json(producto);

        } catch (error) {

            res.status(501).json({ msg: 'Producto Inexistente, verifique...' })
        }

    }

    //crear producto
    async crear_producto(req, res) {

        try {
            //se crea un nuevo producto usando el modelo 
            //los datos llegan por body
            const nuevo_producto = new Producto(req.body);

            //se agrega a la bd 
            await nuevo_producto.save();

            //se muestra el nuevo producto agregado
            res.json(nuevo_producto)

        } catch (error) {
            res.status(501).json({ msg: 'Error al guardar producto en bd, verifique...' })
        }
    }


    //editar producto
    async editar_producto_por_Id(req, res) {

        try {
            //el producto viene por body
            //el metodo requiere un id para ubicar producto y los datos
            await Producto.findByIdAndUpdate(req.params.id, req.body)

            res.status(202).json({ msg: 'Producto actualizado con exito!' })

        } catch (error) {
            res.status(501).json({ msg: 'Error al actualizar el producto, verifique...' })
        }
    }

    //eliminar producto
    async eliminar_producto_por_Id(req, res) {
        try {

            await Producto.findByIdAndDelete(req.params.id)

            res.status(200).json({ msg: 'Producto eliminado con exito!' })

        } catch (error) {

            res.status(501).json({ msg: 'Error al eliminar el producto, verifique...' })
        }
    }

}

module.exports = new Producto_controller;