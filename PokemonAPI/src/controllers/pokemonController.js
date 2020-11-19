const Sequelize = require('sequelize')
const database = require('../database/models')
const Op = Sequelize.Op

module.exports = {
    catchemAll : function(req,res){
        database.Pokemons.findAll()
        .then(pokemons=>res.json(pokemons))             
    },

    pokedex: function(req,res){
        let dexNumber = req.params.dexNumber
        database.Pokemons.findAll({
            where:{
                PokedexNumber: {[Op.like]: dexNumber}
            }
        })
        .then(pokemon => res.json(pokemon))
    },

    generations: function(req,res){
        let generation = req.params.generation
        database.Pokemons.findAll({
            where:{
                RegionofOrigin:{[Op.substring] : generation }
            },
            order:[
                ['pokedexNumber','ASC']
            ]
        })
        .then(generationList=> res.json(generationList))
    },

    creator: function(req,res){
        database.Pokemons.create({
            id: req.body.id,
            PokedexNumber: req.body.PokedexNumber,  
            PokemonName : req.body.PokemonName, 
            Classification : req.body.Classification,
            AlternateFormName: req.body.AlternateFormName,  
            OriginalPokemonID : req.body.OriginalPokemonID, 
            LegendaryType : req.body.LegendaryType,
            PokemonHeight : req.body.PokemonHeight, 
            PokemonWeight : req.body.PokemonWeight,
            PrimaryType : req.body.PrimaryType,
            SecondaryType : req.body.SecondaryType,
            PrimaryAbility : req.body.PrimaryAbility,
            PrimaryAbilityDescription : req.body.PrimaryAbilityDescription,
            SecondaryAbility : req.body.SecondaryAbility,
            SecondaryAbilityDescription : req.body.SecondaryAbilityDescription,
            HiddenAbility  : req.body.HiddenAbility,
            HiddenAbilityDescription  :  req.body.HiddenAbilityDescription,
            SpecialEventAbility  : req.body.SpecialEventAbility,
            SpecialEventAbilityDescription : req.body.SpecialEventAbilityDescription,
            MaleRatio  : req.body.MaleRatio,
            FemaleRatio : req.body.FemaleRatio,
            BaseHappiness: req.body.BaseHappiness,  
            GamesofOrigin : req.body.GamesofOrigin,
            RegionofOrigin  : req.body.RegionofOrigin,
            HealthStat  : req.body.HealthStat,
            AttackStat  : req.body.AttackStat,
            DefenseStat  : req.body.DefenseStat,
            SpecialAttackStat  : req.body.SpecialAttackStat,
            SpecialDefenseStat  : req.body.SpecialDefenseStat,
            SpeedStat  : req.body.SpeedStat,
            BaseStatsTotal  : req.body.BaseStatsTotal,
            HealthEV  : req.body.HealthEV,
            AttackEV  : req.body.AttackEV,
            DefenseEV  : req.body.DefenseEV,
            SpecialAttackEV  : req.body.SpecialAttackEV,
            SpecialDefenseEV : req.body.SpecialDefenseEV,
            SpeedEV  : req.body.SpeedEV,
            EVYieldTotal  : req.body.EVYieldTotal,
            CatchRate: req.body.CatchRate,
            ExperienceGrowth: req.body.ExperienceGrowth,
            ExperienceGrowthTotal : req.body.ExperienceGrowthTotal,
            ExperienceYield : req.body.ExperienceYield,
            PrimaryEggGroup  : req.body.PrimaryEggGroup,
            SecondaryEggGroup : req.body.SecondaryEggGroup,
            EggCycleCount  : req.body.EggCycleCount,
            PreEvolutionPokemonId  : req.body.PreEvolutionPokemonId,
            EvolutionDetails : req.body.EvolutionDetails
        })
        .then(mnew => res.json(mnew))
        .catch(e=> res.send(e))
    },

    experiments: function(req,res){
        let chosen = req.params.theChosen
        database.Pokemons.update({
            PokedexNumber: req.body.PokedexNumber,  
            PokemonName : req.body.PokemonName, 
            Classification : req.body.Classification,
            AlternateFormName: req.body.AlternateFormName,  
            OriginalPokemonID : req.body.OriginalPokemonID, 
            LegendaryType : req.body.LegendaryType,
            PokemonHeight : req.body.PokemonHeight, 
            PokemonWeight : req.body.PokemonWeight,
            PrimaryType : req.body.PrimaryType,
            SecondaryType : req.body.SecondaryType,
            PrimaryAbility : req.body.PrimaryAbility,
            PrimaryAbilityDescription : req.body.PrimaryAbilityDescription,
            SecondaryAbility : req.body.SecondaryAbility,
            SecondaryAbilityDescription : req.body.SecondaryAbilityDescription,
            HiddenAbility  : req.body.HiddenAbility,
            HiddenAbilityDescription  :  req.body.HiddenAbilityDescription,
            SpecialEventAbility  : req.body.SpecialEventAbility,
            SpecialEventAbilityDescription : req.body.SpecialEventAbilityDescription,
            MaleRatio  : req.body.MaleRatio,
            FemaleRatio : req.body.FemaleRatio,
            BaseHappiness: req.body.BaseHappiness,  
            GamesofOrigin : req.body.GamesofOrigin,
            RegionofOrigin  : req.body.RegionofOrigin,
            HealthStat  : req.body.HealthStat,
            AttackStat  : req.body.AttackStat,
            DefenseStat  : req.body.DefenseStat,
            SpecialAttackStat  : req.body.SpecialAttackStat,
            SpecialDefenseStat  : req.body.SpecialDefenseStat,
            SpeedStat  : req.body.SpeedStat,
            BaseStatsTotal  : req.body.BaseStatsTotal,
            HealthEV  : req.body.HealthEV,
            AttackEV  : req.body.AttackEV,
            DefenseEV  : req.body.DefenseEV,
            SpecialAttackEV  : req.body.SpecialAttackEV,
            SpecialDefenseEV : req.body.SpecialDefenseEV,
            SpeedEV  : req.body.SpeedEV,
            EVYieldTotal  : req.body.EVYieldTotal,
            CatchRate: req.body.CatchRate,
            ExperienceGrowth: req.body.ExperienceGrowth,
            ExperienceGrowthTotal : req.body.ExperienceGrowthTotal,
            ExperienceYield : req.body.ExperienceYield,
            PrimaryEggGroup  : req.body.PrimaryEggGroup,
            SecondaryEggGroup : req.body.SecondaryEggGroup,
            EggCycleCount  : req.body.EggCycleCount,
            PreEvolutionPokemonId  : req.body.PreEvolutionPokemonId,
            EvolutionDetails : req.body.EvolutionDetails
            },
            {
                where:{
                    id:{[Op.like]: chosen}
                }
        })
        .then(chosen=>res.json(chosen))
        .catch(e=>res.send(e))
    },

    exterminium: function(req,res){
        database.Pokemons.destroy({
            where:{
                id: req.params.anihilation
            }
        })
        .then(sad => res.json(sad))
    }
       
}