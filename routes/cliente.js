const { Router } = require("express")
const router = Router()

const {getCliente,postCliente, deleteCliente, patchCliente} = require("../controllers/pedido")

router.post('/', postCliente)
router.get('/', getCliente)
router.delete('/', deleteCliente)
router.patch('/', patchCliente)

module.exports = router;