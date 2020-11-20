const express = require('express')
const router = express.Router()
const trainerController = require('../controllers/trainerController')
const auth = require('../middlewares/authMiddleware')

router.post('/register', trainerController.register)
router.post('/signin', trainerController.signIn)
router.delete('/bye', auth, trainerController.thisIsTheEnd)
router.put('/changethis', auth, trainerController.changeThis)
module.exports = router