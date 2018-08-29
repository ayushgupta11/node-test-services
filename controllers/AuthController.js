const {User} = require('../models')

module.exports = {
    async register(req, res){
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        }
        catch(error){
            res.status(400).send({
                error: 'Email already in use!'
            })
        }
        res.send({
            msg: 'Your user was registered! Username is :' + req.body.username
        })
    }
}