module.exports = (sequelize, Datatypes) =>{

    let alias = 'Pokemons'

    let cols = {
        id : {
            type: Datatypes.INTEGER(11),
            primaryKey : true
        },

        PokedexNumber : {
            type: Datatypes.INTEGER(11)
        },
        
        PokemonName : {
            type: Datatypes.STRING
        },

        Classification : {
            type: Datatypes.STRING
        },

        AlternateFormName : {
            type: Datatypes.STRING
        },

        OriginalPokemonID : {
            type: Datatypes.STRING
        },

        LegendaryType : {
            type: Datatypes.STRING
        },

        PokemonHeight : {
            type: Datatypes.STRING
        },

        PokemonWeight : {
            type: Datatypes.DOUBLE
        },

        PrimaryType : {
            type: Datatypes.STRING
        },

        SecondaryType : {
            type: Datatypes.STRING
        },

        PrimaryAbility : {
            type: Datatypes.STRING
        },

        PrimaryAbilityDescription : {
            type: Datatypes.STRING
        },

        SecondaryAbility : {
            type: Datatypes.STRING
        },

        SecondaryAbilityDescription : {
            type: Datatypes.STRING
        },

        HiddenAbility : {
            type: Datatypes.STRING
        },
        HiddenAbilityDescription : {
            type: Datatypes.STRING
        },
    
        SpecialEventAbility : {
            type: Datatypes.STRING
        },
        SpecialEventAbilityDescription : {
            type: Datatypes.STRING
        },

        MaleRatio : {
            type: Datatypes.DOUBLE
        },

        FemaleRatio : {
            type: Datatypes.DOUBLE
        },
        
        BaseHappiness : {
            type: Datatypes.INTEGER(11)
        },

        HealthStat : {
            type: Datatypes.INTEGER(11)
        },
        
        AttackStat : {
            type: Datatypes.INTEGER(11)
        },
        
        DefenseStat : {
            type: Datatypes.INTEGER(11)
        },        

        SpecialAttackStat : {
            type: Datatypes.INTEGER(11)
        },
        
        SpecialDefenseStat : {
            type: Datatypes.INTEGER(11)
        },

        SpeedStat : {
            type: Datatypes.INTEGER(11)
        },
        
        BaseStatsTotal : {
            type: Datatypes.INTEGER(11)
        },

        HealthEV : {
            type: Datatypes.INTEGER(11)
        },

        AttackEV : {
            type: Datatypes.INTEGER(11)
        },

        DefenseEV : {
            type: Datatypes.INTEGER(11)
        },

        SpecialAttackEV : {
            type: Datatypes.INTEGER(11)
        },

        SpecialDefenseEV : {
            type: Datatypes.INTEGER(11)
        },

        SpeedEV : {
            type: Datatypes.INTEGER(11)
        },

        EVYieldTotal : {
            type: Datatypes.INTEGER(11)
        },
        
        CatchRate : {
            type: Datatypes.INTEGER(11)
        },

        ExperienceGrowth : {
            type: Datatypes.STRING
        },

        ExperienceGrowthTotal : {
            type: Datatypes.INTEGER(11)
        },

        ExperienceYield : {
            type: Datatypes.INTEGER(11)
        },

        PrimaryEggGroup : {
            type: Datatypes.STRING
        },

        SecondaryEggGroup : {
            type: Datatypes.STRING
        },

        EggCycleCount : {
            type:Datatypes.INTEGER(11)
        },

        PreEvolutionPokemonId : {
            type: Datatypes.STRING
        },

        EvolutionDetails : {
            type: Datatypes.STRING
        }

    }

    let config =  {
        tableName: 'pokemondatabase',
        timestamps: false
    }

    const Pokemon = sequelize.define(alias,cols,config)
    
    return Pokemon
}

