const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.port || 8082
const app = express()
const {sequelize} = require('./models')
const config = require('./config/config')



app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require('./router')(app)

sequelize.sync()
.then(() => {
    app.listen(port)
    console.log("Listening to port " + port)
})
