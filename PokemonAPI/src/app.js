const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv')

const routesPkmn = require('./routes/pokemon')
const routesTrainer = require('./routes/trainer')

dotenv.config()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/pokemon', routesPkmn)
app.use('/trainer', routesTrainer)

app.listen(3000, ()=> console.log('Corriendo en el puerto 3000'))