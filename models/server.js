const express = require('express')
const cors = require('cors')
const {dbConnection} = require("../database/config")

class Server{

  constructor(){

    this.app = express()

    this.port = process.env.port

    this.usariosPath = '/api/usuarios'
    this.pedidoPath = '/api/pedido'
    this.clientePath = '/api/cliente'
    this.rolPath = '/api/rol'

    this.middlewares()

    this.routes()
    this.dbConectar()
  }
  async dbConectar() { 
    await dbConnection()
  }
  middlewares(){//Otras funcionalidades
    this.app.use( cors() )

    this.app.use( express.static('public'))

    //Permite peticiones json a la API
    this.app.use( express.json() );
  }

  routes(){//Rutas de la aplicación
    this.app.use( this.usariosPath, require('../routes/usuarios'));
    this.app.use( this.pedidoPath, require('../routes/pedido'));
    this.app.use( this.clientePath, require('../routes/cliente'));
    this.app.use( this.rolPath, require('../routes/rol'));
  }
  
  listen(){
    this.app.listen(this.port, () => {
      console.log(`Escuchando por el puerto ${this.port}`)
    }) 
  }
}

module.exports = Server