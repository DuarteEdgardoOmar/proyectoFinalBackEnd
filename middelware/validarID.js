const { Producto } = require('../models/productoModels.js')

const mongoose = require('mongoose')

const validar_Id_Producto = async (req, res, next) => {

    try {
        //consulta a bd si el producto existe
        const producto = await Producto.findById(req.params.id)

        //si no existe se devuelve msg de error
        if (!producto) { return res.status(501).json({ msg: 'ID Inexistente, verifique...' }) }

        //si existe, next() devuelve el flujo al callback
        next()


    } catch (error) {

        return res.status(501).json({ msg: 'ID Inexistente, verifique...' })

    }

}

module.exports = { validar_Id_Producto }