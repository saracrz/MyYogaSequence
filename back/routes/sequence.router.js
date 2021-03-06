const router = require('express').Router()
const authenticate = require('../middlewares/authenticate')

const {
  getAllSequences,
  getSequenceById,
  createSequence, 
  deleteSequenceById,
  deleteAsanaById,
  updateSequence
} = require('../controlers/sequence.controller')

router.get('/', authenticate, getAllSequences)
router.get('/:id', getSequenceById)
router.post('/', authenticate, createSequence)
router.delete('/:id/asanas/:asanaID', deleteAsanaById)
router.delete('/:id', deleteSequenceById)
router.put('/:id', updateSequence)

module.exports = router
