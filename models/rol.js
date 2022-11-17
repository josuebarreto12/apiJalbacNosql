const {Schema, model} = require('mongoose')
const RolSchema = Schema({
    nombre : {
        type: String
    },
    descripcion : {
        type: String
    }
})
module.exports = model("Rol", RolSchema)