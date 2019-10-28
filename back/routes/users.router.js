const router = require('express').Router()

const {
  getAllUsers,
  getUserById,
  createUser, 
  deleteUserById,
  updateUser
} = require('../controlers/users.controller')

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.post('/', createUser)
router.delete('/:id', deleteUserById)
router.put('/:id', updateUser)

module.exports = router
