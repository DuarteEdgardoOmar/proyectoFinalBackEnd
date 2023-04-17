const mongoose = require("mongoose");

//obligatorio desde version 7
mongoose.set('strictQuery',true); 

//acceso a variable de entorno
require('dotenv').config()

//funcion de conexion a mongo db
const connect = async () =>{

    try {
        await mongoose.connect(process.env.MONGO_DB_URL)

        console.log('database on');

    } catch (error) {
        
        console.log('fallo en conexion con base de datos, verifique...');

    }
}

module.exports = {connect};