const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const { Schema } = mongoose;

const productoSchema = new Schema({
    familia:{
        type : String,
        required : true
    },
    marca:{
        type : String,
        required : true
    },
    descripcion:{
        type: String,
        required : true
    },
    precio:{
        type:Number,
        required : true
    },
    stock:{
        type: Number,
        required: true
    },
    activo:{
        type: Boolean,
        required: true
    }

})

//creacion del modelo
const Producto = mongoose.model('Producto', productoSchema);

//exportacion del modelo
module.exports = {Producto};