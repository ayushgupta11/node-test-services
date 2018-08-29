var Joi = require('joi')

module.exports = {
    register(req, res, next){
        const schema ={
            username : Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const {error , value} = Joi.validate(req.body, schema)
        if(error){
            switch(error.details[0].context.key){
                case 'username':
                res.status(400).send({
                    error: 'Invalid Email'
                })
                break
                case 'password':
                res.status(400).send({
                    error: 'Invalid Password'
                })
                break
                default:
                res.status(400).send({
                    error: 'Invalid Information'
                })
            }
        }
        else{
            next()
        }
    }
}