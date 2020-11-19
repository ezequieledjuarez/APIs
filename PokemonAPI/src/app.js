const express = require('express')
const app = express()

const routesPkmn = require('./routes/pokemon')

app.use('/', routesPkmn)

app.listen(3000, ()=> console.log('Corriendo en el puerto 3000'))