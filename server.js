const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const PORT = 5000

require('./db/db')

app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))

const harleyControllers = require('./controllers/harleyControllers')

app.use('/harleys', harleyControllers)

app.listen(PORT, () => {
  console.log('listening on port', PORT)
}) 