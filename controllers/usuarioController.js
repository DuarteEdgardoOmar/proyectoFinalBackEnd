const axios = require('axios')

class Usuario_Controller {

    //ver todos los usuarios
    async ver_todos_los_usuarios_axios(req, res) {

        try {
            const usuarios = await axios.get('https://jsonplaceholder.typicode.com/users')

            res.json(usuarios.data)

        } catch (error) {

           res.json({msg:'error en listar todos los usuarios en api https://jsonplaceholder.typicode.com/users'})

        }
    }

    //buscar usuario por id
    async buscar_usuario_por_id(req,res){
        try {

            const url = 'https://jsonplaceholder.typicode.com/users/'+req.params.id;

            const usuario = await axios.get(url)
            
            res.json(usuario.data)

        } catch (error) {

            res.json({msg:'error en buscar usuario por id en api https://jsonplaceholder.typicode.com/users'})
        }
    }
}

module.exports = new Usuario_Controller