const express = require('express')
const cors = require('cors')
const colorRoutes = require('./routes/colors')
const starWarNames = require('./routes/starwars')
const buzzwords = require('./routes/buzzwords')
const bodyParser = require('body-parser')
const app = express()

app.use(cors({ credentials: true }))
app.use(bodyParser.json())
// load routes here
app.get('/', (req, res) => res.send('5n1 API Server'))

colorRoutes(app)
starWarNames(app)
buzzwords(app)

app.listen(5000)
console.log('Server listening at 5000')
