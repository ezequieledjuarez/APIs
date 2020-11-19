const express = require('express')
const router = express.Router()
const pkmnController  = require('../controllers/pokemonController')

router.get('/catchemall', pkmnController.catchemAll)
router.get('/pokedex/:dexNumber', pkmnController.pokedex)
router.get('/generations/:generation', pkmnController.generations)
router.put('/experiments/:theChosen',pkmnController.experiments)
router.post('/creator', pkmnController.creator)
router.delete('/exterminium/:anihilation', pkmnController.exterminium)
module.exports = router