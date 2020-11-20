const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const database = require('../database/models')
const expiresIn = 60 * 10;

module.exports = {

    register: (req,res)=>{

        database.Trainers.create({
            name: req.body.name.trim(),
            pass: bcrypt.hashSync(req.body.pass, 12),
            rol: req.body.rol.trim()
        })
        .then(newCharacter => res.json(newCharacter))
        .catch(e=>res.send(e))
    },

    signIn: (req,res)=>{
        database.Trainers.findOne({
            where:{
                name : req.body.name
            }
        })
        .then(trainer=>{
            if(bcrypt.compareSync(req.body.pass, trainer.pass )){
                const payload = jwt.sign({
                    trainerId: trainer.id,
                    trainerRol: trainer.rol
                },
                    process.env.SECRET,{expiresIn}
                )
                return res.send(
                    {
                        status:200, 
                        msg:'Welcome' + ' ' + trainer.rol + ' ' + 'Do not forget, you ID is : ' + trainer.id,
                        data:{
                            payload,
                            expiresIn
                        }
                    })
                
            }
            else{
                return res.send({status:403, msg:'That are not your credentials'})
                
            }
        })
        .catch(e=> res.json(e))
    },

    thisIsTheEnd: (req,res)=>{
            database.Trainers.destroy({
                where:{
                    id : req.body.id
                }
            })
            .then(bye => res.send({status:200, msg:'Bye'}))
    },

    changeThis: (req,res)=>{
            database.Trainers.update({
                name: req.body.name,
                pass: bcrypt.hashSync(req.body.pass, 12),
                rol: req.body.rol
            },
            {
            where:{
                id : req.body.id
            }
        })
        .then(res.json
            ({
                status:200, 
                msg:'Your info is updated',
            }
        ))
        .catch(e=>res.send(e))
    }
}

