const { Router } = require("express")
const router = Router()

const {getPedido,postPedido, deletePedido, patchPedido} = require("../controllers/pedido")

router.post('/', postPedido)
router.get('/', getPedido)
router.delete('/', deletePedido)
router.patch('/', patchPedido)

module.exports = router;