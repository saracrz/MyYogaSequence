const router = require('express').Router()

const {
  getAllAsanas,
  getAsanaById,
  createAsana, 
  deleteAsanaById,
  updateAsana
} = require('../controlers/asanas.controller')

router.get('/', authenticate, getAllAsanas)
router.get('/:id', getAsanaById)
router.post('/', authenticate, createAsana)
router.delete('/:id', deleteAsanaById)
router.put('/:id', authenticate, updateAsana)

module.exports = router
