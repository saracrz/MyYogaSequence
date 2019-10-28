const router = require('express').Router()

const {
  getAllAsanas,
  getAsanaById,
  createAsana, 
  deleteAsanaById,
  updateAsana
} = require('../controlers/asanas.controller')

router.get('/', getAllAsanas)
router.get('/:id', getAsanaById)
router.post('/', createAsana)
router.delete('/:id', deleteAsanaById)
router.put('/:id', updateAsana)

module.exports = router
