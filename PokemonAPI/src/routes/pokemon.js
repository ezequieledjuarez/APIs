const express = require('express')
const router = express.Router()
const pkmnController  = require('../controllers/pokemonController')
const auth = require('../middlewares/authMiddleware')

router.get('/catchemall', pkmnController.catchemAll)
router.get('/pokedex/:dexNumber', pkmnController.pokedex)
router.get('/generations/:generation', pkmnController.generations)
router.put('/experiments/:theChosen', auth,pkmnController.experiments)
router.post('/creator', auth,pkmnController.creator)
router.delete('/exterminium/:anihilation',auth, pkmnController.exterminium)
module.exports = router