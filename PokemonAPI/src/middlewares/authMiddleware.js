const jwt = require('jsonwebtoken')

module.exports = 
    (req,res,next)=>{
        const token = req.headers.token
        try{
            if(token && jwt.verify(token, process.env.SECRET))next()    
            else{
                throw{
                    code: 403,
                    status: 'Access Denied',
                    msg: 'You must provide a token to continue'
                }
            }
        }
        catch(e){
            res.json({status:500, 'msg':('That is not your token')})
        }
        
    }
