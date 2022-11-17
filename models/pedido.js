const {Schema, model} = require('mongoose')
const PedidoSchema = Schema({
    fechaPedido : {
        type : String
    },
    cliente : {
        type : String
    },
    fechaEntrega : {
        type : String
    },
    estado: {
        type : String
    }
})
module.exports = model("Pedido", PedidoSchema)