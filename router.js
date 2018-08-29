const AuthController = require('./controllers/AuthController')
const AuthPolicy = require('./policy/AuthPolicy')
module.exports = (app) => {
app.post('/register',AuthPolicy.register,AuthController.register)
}