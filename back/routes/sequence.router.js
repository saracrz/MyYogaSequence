const router = require('express').Router()

const {
  getAllSequences,
  getSequenceById,
  createSequence, 
  deleteSequenceById,
  updateSequence
} = require('../controlers/sequence.controller')

router.get('/', getAllSequences)
router.get('/:id', getSequenceById)
router.post('/', createSequence)
router.delete('/:id', deleteSequenceById)
router.put('/:id', updateSequence)

module.exports = router
