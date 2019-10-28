const router = require('express').Router()
const authenticate = require("../middlewares/authenticate")
const authRouter = require('./auth.router')
const usersRouter = require('./users.router')
const sequenceRouter = require('./sequence.router')
const asanasRouter = require('./asanas.router')

router.use('/auth', authRouter)
router.use('/users', authenticate, usersRouter)
router.use('/sequence', authenticate, sequenceRouter)
router.use('/asanas', authenticate, asanasRouter)
module.exports = router
