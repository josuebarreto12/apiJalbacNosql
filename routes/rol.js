const { Router } = require("express")
const router = Router()

const {getRol,postRol, deleteRol, patchRol} = require("../controllers/pedido")

router.post('/', postRol)
router.get('/', getRol)
router.delete('/', deleteRol)
router.patch('/', patchRol)

module.exports = router;