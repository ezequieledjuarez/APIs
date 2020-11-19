const express = require('express')
const router = express.Router()
const pkmnController  = require('../controllers/pokemonController')

router.get('/catchemall', pkmnController.catchemAll)

module.exports = router