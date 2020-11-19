const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routesPkmn = require('./routes/pokemon')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/', routesPkmn)


app.listen(3000, ()=> console.log('Corriendo en el puerto 3000'))