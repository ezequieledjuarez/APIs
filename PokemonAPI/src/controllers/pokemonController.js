const path = require('path')
const sequelize = require('sequelize')
const database = require('../database/models')

module.exports = {
    catchemAll : function(req,res){
        database.Pokemons.findAll()
        .then(pokemons=>res.json(pokemons))             
    }
}