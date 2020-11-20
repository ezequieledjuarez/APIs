module.exports = (sequelize, dataTypes)=>{
    
    let alias = 'Trainers'

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },

        pass :{
            type: dataTypes.STRING(100),
            allowNull: false
        },

        rol :{
            type: dataTypes.STRING(45),
            allowNull: false
        }

    }


    let config = {
        tableName: 'trainerdatabase',
        timestamps: false
    }

    const Trainer = sequelize.define(alias,cols,config)

    return Trainer

}
