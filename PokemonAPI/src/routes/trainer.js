const express = require('express')
const router = express.Router()
const trainerController = require('../controllers/trainerController')

router.post('/register', trainerController.register)
router.post('/signin', trainerController.signIn)
router.delete('/bye', trainerController.thisIsTheEnd)
router.put('/changethis', trainerController.changeThis)
module.exports = router