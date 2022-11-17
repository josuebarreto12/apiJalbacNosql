const {Schema, model} = require('mongoose')
const ClienteSchema = Schema({
    documento : {
        type : String
    },
    nombre : {
        type : String
    },
    apellido : {
        type : String
    },
    telefono: {
        type : String
    },
    estado: {
        type : String
    }
})
module.exports = model("Cliente", ClienteSchema)